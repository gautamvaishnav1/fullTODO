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

    body('phoneNumber')
    .notEmpty()
    .withMessage('phone number is required')
    .isLength({min:10})
    .withMessage('phone number must be at least 10 digits'),

    body('confirmPassword')
    .custom((value,{req})=>{
        if(value!==req.body.password){
            throw new Error('password do not match')
        }
        return true
        })
  
]


exports.loginUser=[
    body('email')
    .isEmail()
    .withMessage('please fill a valid email'),

    body('password')
    .isLength({min:6})
    .withMessage('password must be at least 6 character long'),
]