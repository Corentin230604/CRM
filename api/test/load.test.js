import test from 'node:test';
import assert from 'node:assert/strict';

test('toutes les fonctions se chargent et déclarent leurs routes', async () => {
  const { app } = await import('@azure/functions');
  const routes = [];
  const original = app.http;
  app.http = (name, opts) => { routes.push(`${opts.methods.join(',')} /api/${opts.route}`); };
  try {
    await import('../src/index.js');
  } finally {
    app.http = original;
  }
  assert.deepEqual(routes.sort(), [
    'DELETE /api/bookings/{id}', 'DELETE /api/users/{id}',
    'GET /api/auth/callback', 'GET /api/auth/login', 'GET /api/health', 'GET /api/live', 'GET /api/me', 'GET /api/rooms/schedule', 'GET /api/state',
    'POST /api/auth/logout', 'POST /api/bookings', 'POST /api/me/disconnect', 'POST /api/users',
    'PUT /api/layout', 'PUT /api/me/status', 'PUT /api/users/{id}',
  ]);
});
