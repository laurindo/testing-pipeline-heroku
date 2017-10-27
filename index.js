const http = require('http');
const port = process.env.port || 3001;

http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    res.end('hello world');
}).listen(port);

console.log('Server listening on port 3001');