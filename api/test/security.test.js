import test from 'node:test';
import assert from 'node:assert/strict';

process.env.ETAGE_SECRET = 'un-secret-de-test-suffisamment-long-pour-hkdf-0123456789';

test('les jetons Microsoft sont chiffrés et infalsifiables', async () => {
  const { encrypt, decrypt } = await import('../src/lib/tokens.js');
  const c = encrypt('{"RefreshToken":"abc"}');
  assert.ok(!c.includes('abc'));
  assert.equal(decrypt(c), '{"RefreshToken":"abc"}');
  const tampered = Buffer.from(c, 'base64'); tampered[tampered.length - 1] ^= 1;
  assert.throws(() => decrypt(tampered.toString('base64')));
});

test('session signée : lue si intacte, refusée si modifiée', async () => {
  const { sessionCookie, readSession } = await import('../src/lib/session.js');
  const c = await sessionCookie({ id: 'user-1', name: 'Claire' });
  assert.equal(c.httpOnly, true);
  const req = (v) => ({ headers: { get: (h) => (h === 'cookie' ? `etage_session=${v}` : null) } });
  assert.equal(await readSession(req(c.value)), 'user-1');
  assert.equal(await readSession(req(c.value.slice(0, -2) + 'xx')), null);
  assert.equal(await readSession({ headers: { get: () => null } }), null);
});

test('requêtes de modification sans en-tête x-etage refusées', async () => {
  const { handler } = await import('../src/lib/http.js');
  const h = handler(async () => ({ status: 200 }));
  const ctx = { warn() {}, error() {} };
  const post = (headers) => ({ method: 'POST', headers: { get: (k) => headers[k] ?? null } });
  assert.equal((await h(post({}), ctx)).status, 403);
  assert.equal((await h(post({ 'x-etage': '1' }), ctx)).status, 200);
});
