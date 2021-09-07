const router=require('express').Router()
const validUrl=require('valid-url')
const shortId=require('shortid');
const urlModel=require('../../../models/url')
const isUrl = require('is-url');
// const auth= require('../emailApi/email')

router.post("/longData",async(req,res)=>{
    try {
        const data=req.body
        const longUrl=data.urlLink
        const email=data.email.email
        const photoUrl=data.email.photoUrl
        const baseUrl='http://localhost:8080'
        
        let we=await urlModel.find({email})
        let url=await urlModel.findOne({longUrl})
        
        if(!isUrl(longUrl)){
            return res.json({urlCode:"URL not found"})
        }else if(url){
            return res.json(url)
        }else{
            let shortUrl=shortId.generate()
            let urlCode=baseUrl +"/"+ shortUrl 
            let ba= new urlModel({
                photoUrl,
                email,
                longUrl,
                shortUrl,
                urlCode,
                date:new Date()
            })
            const saved=await ba.save()
            res.json(saved)
        }
    
    } catch (error) {
        res.status(500).json("Server Error")
    }
})
module.exports= router;