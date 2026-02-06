const { body } = require("express-validator");

exports.registerUser=[
    body('firstName')
    .notEmpty()
    .withMessage('first name is required'),

    body('email')
    .isEmail()
    .withMessage('please fill a valid email'),

    body('password')
    .isLength({min:6})
    .withMessage('password must be at least 6 character long'),

    body('confirmPassword')
    .custom((value,{req})=>{
        if(value!==req.body.password){
            throw new Error('password do not match')
        }
        return true
        })
  
]