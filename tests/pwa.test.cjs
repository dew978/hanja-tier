const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');

async function main() {
  const manifest = JSON.parse(read('manifest.webmanifest'));
  const scope = 'https://school.example/class-tier/';
  assert.equal(new URL(manifest.scope, scope).href, scope);
  assert.equal(new URL(manifest.start_url, scope).href, scope + 'index.html');
  assert.equal(manifest.display, 'standalone');
  assert.equal(manifest.prefer_related_applications, false);
  for (const icon of manifest.icons) {
    const bytes = fs.readFileSync(path.join(root, icon.src));
    const [width, height] = icon.sizes.split('x').map(Number);
    assert.equal(bytes.toString('ascii', 1, 4), 'PNG');
    assert.equal(bytes.readUInt32BE(16), width);
    assert.equal(bytes.readUInt32BE(20), height);
  }
  assert.ok(manifest.icons.some(icon => icon.sizes === '192x192'));
  assert.ok(manifest.icons.some(icon => icon.sizes === '512x512'));
  assert.match(read('index.html'), /rel="manifest"[^>]*href="manifest.webmanifest"/);

  const handlers = {}, entries = new Map(), deleted = [];
  const cacheName = 'hanja-tier-pwa:/class-tier/:v3';
  let online = true, fetched = 0, claimed = false;
  const response = label => ({ ok: true, label, clone() { return response(label); } });
  const normalize = request => new URL(typeof request === 'string' ? request : request.url, scope).href;
  const cache = {
    async addAll(assets) {
      for (const asset of assets) {
        assert.ok(fs.existsSync(path.join(root, asset === './' ? 'index.html' : asset)), asset);
        assert.ok(!asset.includes('preview'), 'Preview data must not be pre-cached');
        entries.set(normalize(asset), response(asset));
      }
    },
    async put(request, value) { entries.set(normalize(request), value); },
    async match(request, options) {
      const key = normalize(request);
      return entries.get(key) || (options?.ignoreSearch && [...entries].find(([url]) => url.split('?')[0] === key.split('?')[0])?.[1]);
    }
  };
  vm.runInNewContext(read('sw.js'), {
    URL,
    self: { registration: { scope }, clients: { async claim() { claimed = true; } }, addEventListener(type, callback) { handlers[type] = callback; } },
    caches: {
      async open(name) { assert.equal(name, cacheName); return cache; },
      async keys() { return [cacheName, 'hanja-tier-pwa:/class-tier/:v2', 'hanja-tier-pwa:/another-class/:v2', 'unrelated']; },
      async delete(name) { deleted.push(name); }
    },
    async fetch(request) { fetched++; if (!online) throw new Error('offline'); return response(request.url); }
  });
  let pending;
  handlers.install({ waitUntil(promise) { pending = promise; } });
  await pending;
  handlers.activate({ waitUntil(promise) { pending = promise; } });
  await pending;
  assert.deepEqual(deleted, ['hanja-tier-pwa:/class-tier/:v2']);
  assert.ok(claimed);

  const request = (url, mode = 'cors', method = 'GET') => ({ url, mode, method });
  const dispatch = req => { let result; handlers.fetch({ request: req, respondWith(promise) { result = promise; } }); return result; };
  assert.equal(dispatch(request('https://firebase.example/private.json')), undefined);
  assert.equal(dispatch(request(scope + 'private.json')), undefined);
  assert.equal(dispatch(request(scope + 'js/app.js', 'cors', 'POST')), undefined);
  assert.equal(dispatch(request('https://school.example/another-class/index.html', 'navigate')), undefined);
  assert.equal(dispatch(request(scope + 'js/preview-seed.js')), undefined);
  assert.equal(fetched, 0);
  const asset = await dispatch(request(scope + 'js/app.js'));
  assert.equal(asset.label, scope + 'js/app.js');
  online = false;
  assert.equal((await dispatch(request(scope + 'index.html', 'navigate'))).label, './offline.html');
  assert.equal((await dispatch(request(scope + 'js/app.js?v=new'))).label, scope + 'js/app.js');
  console.log('PASS: manifest, icon dimensions, nested Pages path, scoped cache, offline fallback, private-request exclusion');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
