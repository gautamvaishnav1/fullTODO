const { validationResult } = require("express-validator");
const todoItemModel = require("../models/todoItem.model");

exports.createItem=async(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            message:errors.array()[0].msg
        })
    }
    console.log(req.body)
    res.status(201).json({
        message:"created task"
    })
    
}