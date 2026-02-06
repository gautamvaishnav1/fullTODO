const express=require('express')

const authController=require('../controllers/auth.controller')  
const authValidator=require('../validator/auth.validator')

const authRouter=express.Router()

//user
authRouter.post('/user/register',authValidator.registerUser,authController.UserRegister)
authRouter.post('/user/login',authController.userLogin)
authRouter.post('/user/logout',authController.userLogout)

module.exports=authRouter