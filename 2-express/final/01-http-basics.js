const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    else if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        return res.end();
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Page Not Found</h1>');
        return res.end();
    }
})

server.listen(5000,() => {
    console.log('Server is running on port http://localhost:5000');
})