const jwt = require('jsonwebtoken');

const authenticationMiddleware = async (req, res, next) => {

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    console.log(token)

    try{
        console.log("Hi")
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decoded;
        req.user = { id, username };
        next();
    
    }catch(error){
        console.log(error);
        res.status(401).json({ message: 'Invalid token' });
        
    }

}

module.exports = authenticationMiddleware