const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, rest, next){
    const token= req.header('x-auth-token');

    //Check for token
    if(!token) rest.status(401).json({ msg: "No token, Unauthorized"});

    try {
        //verify token
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        //Add User from payload
        req.user = decoded;
        next();
    } catch(e) {
        rest.status(400).json({ msg: 'Token is not valid'});
    }
}

module.exports  = auth;