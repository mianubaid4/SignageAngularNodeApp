const bcrypt = require('bcrypt') //npm i --save bcrypt
const User  = require('../models/userModel')
const jwt = require('jsonwebtoken')


exports.createUser=(req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
      
        const user = new User({
            username:req.body.name,
            email: req.body.email,
            password: hash
        });
      
        user.save().then(result => {
            console.log(result)
            res.status(201).json({
                message: "User Created Successfully",
                result: result,
            })
        }).catch(err => {
            res.status(500).json({

                error: "invalid authentication credentials" +err,
            })
        })
    })

}

exports.userLogin=(req, res, next) => {
    let fecheduser;
    User.findOne({ email: req.body.email }).then(userData => {
        if (!userData) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }
        fecheduser=userData;
        return bcrypt.compare(req.body.password, userData.password)
    })
        .then(result => {
            if (!result) {
                return res.status(404).json({
                    message: "Auth Failed"
                })
            }
            const token = jwt.sign({ email: fecheduser.email, userId: fecheduser._id }, 'Signage_User_Token', { expiresIn: '1h' })
            res.status(200).json({
                token: token,
                expiresIn:3600,
                userId:fecheduser._id,
                username:fecheduser.username,
                email:fecheduser.email

            });
        })
        .catch(err => {
            return res.status(401).json({
                message: 'Auth failed'
            })
        })
}