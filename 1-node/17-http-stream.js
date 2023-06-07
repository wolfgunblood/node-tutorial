var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');
    fileStream.on('open', () => {
        fileStream.pipe(res);
    })
    fileStream.on('error', (err) => {
        res.end(err);
    })
})
.listen(5000, () => {
    console.log('Server is running on port 5000');
})