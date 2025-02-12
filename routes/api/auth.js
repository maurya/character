const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

//Item Model
const User = require('../../models/User');

// @route POST api/auth
// @desc  Auth Users
// @access Public
router.post('/', (req, res)=> {
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
        return  res.status(400).json({msg: "Please enter all fields"});
    }

    //Check if user already exists
    User.findOne({ email })
    .then (user => {
        if (!user) return res.status(400).json({msg: "User does not exists"});

        //Validate password
        bcrypt.compare(password, user.password)
         .then(isMatch => {
             if(!isMatch) return res.status(401).json("Invalid Credentials");

             jwt.sign(
                { id: user.id},
                config.get('jwtSecret'),
                {expiresIn: 3600},
                (err, token) => {
                    if(err) throw err;
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        }
                    });
                }
            )
         })

    })
});


module.exports = router;