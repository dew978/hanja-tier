const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const storage=()=>{const values=new Map();return{getItem:key=>values.get(key)||null,setItem:(key,value)=>values.set(key,String(value)),removeItem:key=>values.delete(key)}};
global.window={addEventListener(){},HANJA_FIREBASE_CONFIG:null,HANJA_DEMO_NAMESPACE:'studentAccountsTest'};
global.localStorage=storage();global.sessionStorage=storage();
global.fetch=async()=>({ok:true,json:async()=>JSON.parse(fs.readFileSync(path.join(root,'database.rules.json'),'utf8'))});
const seed={config:{teacher:'t'},users:{old:{name:'기존 학생',no:1,loginId:'old'}},hanja:{old:{learned:12}}};
localStorage.setItem('studentAccountsTestDB',JSON.stringify(seed));
localStorage.setItem('studentAccountsTestAuth',JSON.stringify({teacher:{uid:'t',pw:'demo-only'},old:{uid:'old',pw:'existing-test'}}));
sessionStorage.setItem('studentAccountsTestUid','t');
for(const file of ['backend.js','student-accounts.js'])vm.runInThisContext(fs.readFileSync(path.join(root,'js',file),'utf8'),{filename:file});
const B=window.Backend,A=window.StudentAccounts;
const rows=records=>[{rowNumber:1,cells:['이름','아이디','비밀번호']},...records.map((cells,i)=>({rowNumber:i+2,cells}))];
const database=()=>JSON.parse(localStorage.getItem('studentAccountsTestDB'));
async function settle(test){for(let i=0;i<40;i++){if(test())return;await new Promise(resolve=>setTimeout(resolve,5));}throw new Error('UI did not settle');}
(async()=>{
  await B.init();
  let records=A.validateRows(rows([['가상 학생','001','123456'],['둘째','ABC',''],['','','123456']]));
  assert.equal(records.length,2);assert.equal(records[0].loginId,'001');assert.equal(records[1].loginId,'abc');
  assert(records.every(row=>row.errors.length===0));
  const duplicates=A.validateRows(rows([['첫째','ABC','123456'],['둘째','abc','123456']]));
  assert(duplicates.every(row=>row.errors.some(error=>error.includes('중복'))));
  const invalid=A.validateRows(rows([['','old','bad'],['이름','master','123456'],['이름','한글','123456']]),seed.users);
  assert(invalid.every(row=>row.errors.length));assert(invalid[0].errors.some(error=>error.includes('이미 등록')));
  assert.throws(()=>A.validateRows([{rowNumber:1,cells:['아이디','이름','비밀번호']}]),/열 이름/);
  assert.throws(()=>A.validateRows(rows([['','','123456']])),/학생이 없/);
  assert.throws(()=>A.validateRows(rows(Array.from({length:101},(_,i)=>['이름',String(i),'123456']))),/100명/);
  const formula=rows([['학생','001','123456']]);formula[1].formula=true;
  assert(A.validateRows(formula)[0].errors.some(error=>error.includes('수식')));
  const uid=await A.register(B,'t',records[0]);
  assert.equal(B.currentUid(),'t','creating students keeps the teacher signed in');
  assert.equal(database().users[uid].pwc,true);assert.equal(database().users[uid].loginId,'001');
  assert(!('pw' in database().users[uid]),'passwords must not be stored in the class roster');
  assert.deepEqual(database().users.old,seed.users.old);assert.deepEqual(database().hanja.old,seed.hanja.old);
  await assert.rejects(()=>A.register(B,'t',{name:'덮어쓰기',loginId:'old'}),/이미 등록/);
  // Failed roster save is retried using the previously created Auth UID, even after a dialog reload.
  let creates=0,fail=true;
  const flaky={...B,createAccount:async(...args)=>{creates++;return B.createAccount(...args)},set:async(...args)=>{if(fail)throw new Error('network');return B.set(...args)}};
  await assert.rejects(()=>A.register(flaky,'t',records[1]),/network/);assert(records[1].pendingUid);
  fail=false;
  const retry={name:'둘째',loginId:'abc'};await A.register(flaky,'t',retry);assert.equal(creates,1);assert.equal(retry.status,'done');
  await B.signOut();await B.signIn('001','123456');
  let user=await B.get('users/'+uid);
  assert(await A.requiresPasswordChange(B,uid,user,{loginId:'001',usedInitial:true}));
  assert(await A.requiresPasswordChange(B,uid,user,null),'restored sessions stay gated');
  for(const [pw,again,match] of [['123456','123456',/초기/],['abc','abc',/6~100/],['new-test','different',/서로/]])await assert.rejects(()=>A.changeFirstPassword(B,uid,pw,again),match);
  await assert.rejects(()=>A.changeFirstPassword({...B,changeOwnPassword:async()=>{throw new Error('network')}},uid,'new-test','new-test'),/network/);
  assert.equal(database().users[uid].pwc,true);
  await A.changeFirstPassword(B,uid,'new-test','new-test');
  assert.equal(B.currentUid(),null);assert.equal(database().users[uid].pwc,true,'password change alone does not clear the gate');
  await assert.rejects(()=>B.signIn('001','123456'));
  await B.signIn('001','new-test');
  assert.equal(await A.requiresPasswordChange(B,uid,user,{loginId:'001',usedInitial:false}),false);
  assert.equal(database().users[uid].pwc,undefined);
  assert.equal(await A.requiresPasswordChange(B,'old',seed.users.old,null),false);

  // Exercise the actual app login handlers with a minimal DOM, using only fictional demo accounts.
  await B.signOut();await B.signIn('teacher','demo-only');
  const fresh={name:'첫 로그인',loginId:'fresh'};const freshUid=await A.register(B,'t',fresh);await B.signOut();
  const elements=new Map(),listeners={};
  function element(id){if(!elements.has(id))elements.set(id,{id,value:'',textContent:'',disabled:false,hidden:false,classList:{add(){},remove(){},toggle(){}},focus(){},reset(){},replaceChildren(){},querySelector(){return element(id+'-submit')}});return elements.get(id);}
  global.document={querySelector:selector=>element(selector),querySelectorAll:()=>[],addEventListener:(type,fn)=>{listeners[type]=fn}};
  window.matchMedia=()=>({matches:false});window.HanjaEngine={};
  let rendered=0;window.HanjaStudy={reset(){},render(){rendered++}};window.HanjaAdmin={reset(){},render(){}};
  vm.runInThisContext(fs.readFileSync(path.join(root,'js/hanja-app.js'),'utf8'));
  await listeners.DOMContentLoaded();await settle(()=>window.App.S.screen==='login');
  async function login(id,password){element('#login-id').value=id;element('#login-pw').value=password;element('#login-form').onsubmit({preventDefault(){},target:element('#login-form')});await settle(()=>!element('#login-form-submit').disabled);}
  await login('fresh','123456');assert.equal(window.App.S.screen,'first-password');assert.equal(rendered,0);
  window.App.render();await window.App.requestHome();assert.equal(rendered,0);
  element('#first-password-new').value='changed-test';element('#first-password-again').value='changed-test';
  element('#first-password-form').onsubmit({preventDefault(){},target:element('#first-password-form')});
  await settle(()=>!element('#first-password-form-submit').disabled && window.App.S.screen==='login');
  assert.equal(rendered,0);assert.equal(database().users[freshUid].pwc,true);assert.match(element('#login-notice').textContent,/다시 로그인/);
  await login('fresh','123456');assert.equal(window.App.S.screen,'login');assert.equal(rendered,0);
  await login('fresh','changed-test');assert.equal(window.App.S.screen,'student');assert(rendered>0);assert.equal(database().users[freshUid].pwc,undefined);
  console.log('PASS student accounts: import validation, leading-zero IDs, duplicate protection, partial-save recovery, fixed password, mandatory change, sign-out and fresh-login gate, existing student preservation');
})().catch(error=>{console.error(error);process.exitCode=1});
