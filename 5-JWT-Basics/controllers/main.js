const jwt = require("jsonwebtoken");

const login = async (req, res) => {
//   const token = req.headers.authorization;
    const {username, password} = req.body;
    // console.log("Hi")

    if(username === "" && password === ""){
        res.status(404).send("Please provide email and password")
    }

    const id = new Date().getTime();
    const token = jwt.sign({id, username}, process.env.JWT_SECRET,{
        expiresIn : "30d",
    });

    res.status(200).json({ msg : "user created",token})
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    console.log(req.user)
    res.status(200).json({
        msg : `Hello ${req.user.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    })
}

module.exports = {
    login,
    dashboard,
}
