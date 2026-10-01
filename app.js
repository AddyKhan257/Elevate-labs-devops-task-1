const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello from my CI/CD pipeline!' }));
  });
}

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  createServer().listen(PORT, () => console.log(`Running on port ${PORT}`));
}

module.exports = { createServer };
