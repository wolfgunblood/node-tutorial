const jwt = require("jsonwebtoken");

const login = (req, res) => {
//   const token = req.headers.authorization;
    const {username, password} = req.body;
    console.log("Hi")
    const id = new Date().getTime();
    // const token = jwt.sign({id, username}, process.env.SECRET_KEY);

    res.status(200).json({ msg : "user created"})
}

const dashboard = (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
        msg : `Hello ${req.user.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    })
}

module.exports = {
    login,
    dashboard,
}
