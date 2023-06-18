const express = require('express');
const path = require('path');
const app = express();

//middlewae to add js and css files to the html

app.use(express.static('./public'))

//all from static
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// })



app.all('*', (req, res) => {
    res.status(404).send("<h1>resource not found</h1>")
})

app.listen(5000, () => {
    console.log("server is listening on port http://localhost:5000");
})