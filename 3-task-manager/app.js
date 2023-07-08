const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

const connectDB = require("./db/connect");
require('dotenv').config();

//middleware
app.use(express.static('./public'));
//if dont use it wont have data in req body
app.use(express.json());

app.get('/hello', (req, res) => {
    res.send("Task Manager App")
})

app.use("/api/v1/tasks",tasks);

// app.listen(3000, () => console.log("Server is listening on port 3000"));

const start = async () => {

    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(3000, () => 
        console.log("Server is listening on port 3000"));

    } catch (error) {
        console.log(error)
    }
}

start();