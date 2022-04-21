const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
{
	name:String,
	category:String,
	price:{
        type:String,
        require:true
    }



}, { timestamps: true });

module.exports = mongoose.model('product', productSchema) 