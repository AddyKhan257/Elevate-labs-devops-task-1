const test = require('node:test');
const assert = require('node:assert');
const { createServer } = require('../app');

test('GET / returns the message', async () => {
  const server = createServer();
  await new Promise((r) => server.listen(0, r));
  const { port } = server.address();
  const res = await fetch(`http://localhost:${port}/`);
  const body = await res.json();
  assert.strictEqual(res.status, 200);
  assert.strictEqual(body.message, 'Hello from my CI/CD pipeline!');
  server.close();
});
