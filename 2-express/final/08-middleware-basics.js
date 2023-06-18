const express = require('express');
const app = express();

//req => middleware => res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}

app.get('/', logger, (req, res) => {
    res.send('Home')
})

app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.all('*', (req, res) => {
    res.status(404).send("<h1>resource not found</h1>")
})

app.listen(5000, () => {
    console.log("server is listening on port http://localhost:5000");
})



