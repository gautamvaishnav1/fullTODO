const express=require('express')
const cookieParser=require('cookie-parser')
const authRouter = require('./routes/auth.route')
const todoTaskCreateRouter = require('./routes/itemCreate.route')
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())


app.use('/api/auth',authRouter)
app.use('/api/task',todoTaskCreateRouter)
module.exports=app