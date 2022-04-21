const req = require("express/lib/request")
const ordertModel = require("../models/orderModel")


const createOrder=async function(req,res){
let data=req.body
let product=await orderModel.create(data)
res.send({data:product})

}
module.exports.createOrder = createOrder











