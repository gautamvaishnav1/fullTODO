const mongoose=require('mongoose')

const connectDb=()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('Data base connected')
    }).catch((err)=>{
        console.log('Error in DB connection',err)
    })  
        
}
module.exports=connectDb