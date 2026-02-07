const express=require('express')
const cookieParser=require('cookie-parser')
const cors=require('cors')
const authRouter = require('./routes/auth.route')
const todoTaskCreateRouter = require('./routes/itemCreate.route')
const { errorHandler } = require('./controllers/errors.controller')
const app=express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())


app.use('/api/auth',authRouter)
app.use('/api/task',todoTaskCreateRouter)
app.use(errorHandler)
module.exports=app