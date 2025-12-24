import express from "express"
const router=express.Router()
router.get("/register",(req,res)=>{
    console.log("ites works");
    
})
router.post("/register",(req,res)=>{
     console.log("ites works");
})
router.put("/register",(req,res)=>{
     console.log("ites works");
})
router.delete("/register",(req,res)=>{
      console.log("ites works");
})
module.exports=router