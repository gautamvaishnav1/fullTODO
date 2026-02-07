const express=require('express')
const Validator = require('../validator/todoItem.validator')
const authMiddleware=require('../middleware/auth.middleware')
const todoController=require('../controllers/todoTask.controller')

const todoTaskCreateRouter=express.Router()

todoTaskCreateRouter.post('/user/createTask',authMiddleware.authUserMiddleware,Validator.itemValidator,todoController.createItem)



module.exports=todoTaskCreateRouter