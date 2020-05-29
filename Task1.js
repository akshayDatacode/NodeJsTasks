// importing any module
var http = require('http');

var server = http.createServer((req, res) => {

    res.writeHead(200);

    res.write("<h1>Hello World!</h1>");
    res.end();
});

server.listen(8080);

//1. Create simple Hello World nodejs application
//2. Send a task list from nodejs application
//3. Use filters using query parameters
//4. Return JSON object from nodejs application