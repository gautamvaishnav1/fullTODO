const userModel = require("../models/user.model");
const jwt = require('jsonwebtoken');

exports.authUserMiddleware=async(req,res,next)=>{
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({message:'Unauthorized'})
    }
    try {   
        const decode =  jwt.verify(token,process.env.JWT_SECRET)
        const user=await userModel.findById(decode.id)
        req.user=user
            next()
}
catch(error){
    res.status(500).json({
        message:"internal server error"
    })
}
}