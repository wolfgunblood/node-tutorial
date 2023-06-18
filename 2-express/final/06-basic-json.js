const express = require('express');
const app = express();
const { products } =  require('./data');

app.get('/', (req, res) => {
    res.json(products)
})

app.all('*', (req, res) => {
    res.status(404).send("<h1>resource not found</h1>")
})

app.listen(5000, () => {
    console.log("server is listening on port http://localhost:5000");
})



