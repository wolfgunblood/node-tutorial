const http = require('http');

//Using Event Emitter API

const server = http.createServer();

// server.on('connection', (socket) => {
//     console.log('New Connection');
// })

server.on('request', (req, res) => {
    res.end('Welcome');
})

const PORT = 5000
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})