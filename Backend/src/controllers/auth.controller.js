const userModel=require('../models/user.model')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
  const {validationResult}=require('express-validator')

exports.UserRegister=async(req,res)=>{
    // Check for validation errors
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            message:errors.array()[0].msg
        })
    }

    const {firstName,lastName,email,password,phoneNumber}=req.body 
     try {
    const isExist=await userModel.findOne({email})

    if(isExist){
        return res.status(409).json({
            message:"user already exist"
        })
    }
    
       const hashPassword=await bcrypt.hash(password,14)
        const user= await userModel.create({firstName,lastName,email,password:hashPassword,phoneNumber})

        const token=jwt.sign(
            {id:user._id}
            ,process.env.JWT_SECRET)

        res.cookie('token',token)

        res.status(201).json({
            message:"user created successfully",
            user:{
                id:user._id,
                email:user.email,
                firstName:user.firstName,
                lastName:user.lastName,
                phoneNumber:user.phoneNumber
            }
        })

    } catch (error) {
        res.status(500).json({
            message:'internal server error'
        })
    }


}

exports.userLogin=async (req,res) => {

    const {email,password}=req.body
     try {
    const isExist=await userModel.findOne({email})
    if(!isExist){
        return res.status(401).json({
            message:"unauthorized access"
        })
    }
   
        const isMatchPassword=await bcrypt.compare(password,isExist.password)
        if(!isMatchPassword){
            return res.status(401).json({
                message:"invalid email or password"
            })
        }

        const token=jwt.sign({id:isExist._id},process.env.JWT_SECRET)
            res.cookie('token',token)

            res.status(200).json({
                message:'user log in successfully',
                user:{
                    id:isExist._id,
                    firstName:isExist.firstName,
                    lastName:isExist.lastName,
                    email:isExist.email,
                    phoneNumber:isExist.phoneNumber
                }
            })
        
    } catch (error) {
        res.status(500).json({
            message:"internal server error"
        })
        
    }
    
}

exports.userLogout=(req,res)=>{
    res.clearCookie('token')
    res.status(200).json({
        message:'user logout '
    })
}