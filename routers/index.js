const router=require("express").Router()
const apiData=require('./api')


router.use("/",apiData)  

module.exports= router;