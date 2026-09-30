# Run locally before uploading the app. The password is prompted, never saved to the repository.
# This registers only the first administrator, or verifies an existing matching master account.
$ErrorActionPreference = 'Stop'
$appRoot = Split-Path $PSScriptRoot -Parent
$configText = Get-Content -LiteralPath (Join-Path $appRoot 'js/firebase-config.js') -Raw -Encoding UTF8
$apiKey = [regex]::Match($configText, 'apiKey:\s*"([^"]+)"').Groups[1].Value
$dbUrl = [regex]::Match($configText, 'databaseURL:\s*"([^"]+)"').Groups[1].Value.TrimEnd('/')
if (-not $apiKey -or -not $dbUrl) { throw 'Firebase configuration is missing.' }
$adminId = 'master'
$email = "$adminId@hanjatier.example.com"
$securePassword = Read-Host 'Password for master (at least 6 characters)' -AsSecureString
$password = [Net.NetworkCredential]::new('', $securePassword).Password
if ($password.Length -lt 6) { throw 'Password must contain at least 6 characters.' }
$requestBody = @{ email = $email; password = $password; returnSecureToken = $true } | ConvertTo-Json
$created = $false
try {
  # If this read fails, stop; never assume a connection failure means there is no admin.
  $existingAdmin = Invoke-RestMethod -Uri "$dbUrl/config/teacher.json" -TimeoutSec 20
  $identity = $null
  try {
    $identity = Invoke-RestMethod -Uri "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=$apiKey" -Method Post -ContentType 'application/json' -Body $requestBody -TimeoutSec 20
  } catch {
    $code = ''
    try { $code = ($_.ErrorDetails.Message | ConvertFrom-Json).error.message } catch { }
    if ($existingAdmin) { throw 'An administrator is already registered. The supplied master login could not be verified. No account or password was changed.' }
    if ($code -notmatch '^(EMAIL_NOT_FOUND|INVALID_LOGIN_CREDENTIALS)$') { throw 'Firebase sign-in failed. Check the connection and Email/Password provider configuration.' }
    $identity = Invoke-RestMethod -Uri "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=$apiKey" -Method Post -ContentType 'application/json' -Body $requestBody -TimeoutSec 20
    $created = $true
  }
  $token = [Uri]::EscapeDataString($identity.idToken)
  if ($existingAdmin -and $existingAdmin -ne $identity.localId) { throw 'Another account already owns the administrator role. It has not been replaced.' }
  if (-not $existingAdmin) {
    $uidBody = ConvertTo-Json -InputObject ([string]$identity.localId) -Compress
    $null = Invoke-RestMethod -Uri "$dbUrl/config/teacher.json?auth=$token" -Method Put -ContentType 'application/json' -Body $uidBody -TimeoutSec 20
    $className = Invoke-RestMethod -Uri "$dbUrl/config/className.json?auth=$token" -TimeoutSec 20
    if (-not $className) { $null = Invoke-RestMethod -Uri "$dbUrl/config/className.json?auth=$token" -Method Put -ContentType 'application/json' -Body '"Hanja Tier"' -TimeoutSec 20 }
    $teacherName = Invoke-RestMethod -Uri "$dbUrl/config/teacherName.json?auth=$token" -TimeoutSec 20
    if (-not $teacherName) { $null = Invoke-RestMethod -Uri "$dbUrl/config/teacherName.json?auth=$token" -Method Put -ContentType 'application/json' -Body '"master"' -TimeoutSec 20 }
  }
  $verified = Invoke-RestMethod -Uri "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=$apiKey" -Method Post -ContentType 'application/json' -Body $requestBody -TimeoutSec 20
  $role = Invoke-RestMethod -Uri "$dbUrl/config/teacher.json" -TimeoutSec 20
  if ($role -ne $verified.localId) { throw 'Sign-in succeeded, but the administrator role could not be verified.' }
  Write-Host 'Verified: master can sign in as the administrator with the password you entered.'
} catch {
  if ($created) { Write-Warning 'The authentication account was created, but setup or verification did not finish. Run this script again with the same password to resume.' }
  Write-Error 'Administrator setup was not completed. Check Firebase connectivity, Email/Password sign-in, and whether another administrator already exists.'
} finally {
  $password = $null; $requestBody = $null; $identity = $null; $verified = $null; $token = $null
  if ($securePassword) { $securePassword.Dispose() }
}
