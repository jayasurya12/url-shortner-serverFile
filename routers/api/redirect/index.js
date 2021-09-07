const router=require('express').Router()
const urlModel=require('../../../models/url')

router.get("/:newCode",async(req,res)=>{
    const urlLink= await urlModel.findOne({shortUrl:req.params.newCode})
    if(urlLink == null) return res.status(404).json("page not found")
    res.redirect(urlLink.longUrl)
})

module.exports= router