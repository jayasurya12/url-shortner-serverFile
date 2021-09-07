const router=require("express").Router()
const urlShorted=require("./urlShorted/index")
const emailValid=require("./emailApi/email")
const redirect=require('./redirect/index')


router.use("/url",urlShorted)
router.use("/email",emailValid)
router.use("/",redirect)


module.exports=router;