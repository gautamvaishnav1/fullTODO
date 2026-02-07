const mongoose = require('mongoose');

const todoItemSchema=new mongoose.Schema({
    userName:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'todoUser',
    },
    todoTask:{
        type:String,
        required:true,
    },
    todoCompleteTime:{
        type:String,
        required:true,
    }
    ,
    todoComplete:{
        type:Boolean,
        default:false,
        required:true,
    },
    todoDate:{
        type:Date,
        default:Date.now,
        required:true,
    }

});

const todoItemModel=new mongoose.model('todoTasks',todoItemSchema);

module.exports=todoItemModel;