const auth= require("express").Router()
const urlModel=require("../../../models/url")

auth.post("/data",async(req,res,)=>{
    try {
        const emailData=req.body;
        ///////email
        const urlMode= await urlModel.find({email:emailData.email})
        res.json(urlMode)
        /////////////////
    } catch (error) {
        res.json(error);
    }
})

auth.post("/remove",async(req,res)=>{
    try {
        const removedId=req.body?._id;
        const removed= await urlModel.findByIdAndRemove({_id:removedId})
        const data= await urlModel.find({})
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})
module.exports= auth

