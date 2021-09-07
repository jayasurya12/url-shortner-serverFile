const express=require('express')
const router=require('./routers')
const dotenv=require('dotenv')
dotenv.config({path:"./config/config.env"})
const cors=require('cors')
const db=require("./config/db")
db();

const app=express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/",router)

app.listen(process.env.PORT || 5000,()=>{
    console.log('server started');
})