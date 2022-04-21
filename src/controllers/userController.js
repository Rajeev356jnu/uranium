const req = require("express/lib/request")
const userModel= require("../models/userModel")

const createUserBase=async function(req,res,next){
    let data=req.body
    let header=req.headers.isfreeappuser
   if(header){
    let product=await userModel.create(data)
    res.send({data:product})
   
   }else{
   
        res.send({msg: "header is mandatory"})
    }
    
}


    module.exports.createUserBase = createUserBase
   














