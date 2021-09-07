const mongoose=require("mongoose")

const urlSchema= new mongoose.Schema({
    photoUrl:String,
    email:String,
    longUrl:String,
    shortUrl:String,
    urlCode:String,
    date:{
        type:String,
        default:Date.now()
    }
})
const Url= mongoose.model('url',urlSchema)
module.exports=Url