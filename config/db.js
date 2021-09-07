const mongoose=require("mongoose")

const connect_DB= async()=>{
    try {
        const db= await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log(`mongoose connection ${db.connection.host}`);
    } catch (error) {
        res.json(error)
    }
} 

module.exports =connect_DB;