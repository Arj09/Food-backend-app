const mongoose = require('mongoose')

const FoodAppSchema = mongoose.Schema({
     section_name: {
        type:String,
        required : [true, "add product section_name"]
        
        
    },
    product_name: {
        type:String,
        required : [true, "add product name"]
        
        
    },
    one_liner: {
        type:String,
        required : [true, "add product one_liner"]
        
        
    },
   
    image_url: {
        type:String,
        required : [true, "add product image_url"]
        
        
    },
    rate: {
        type:Number,
        required : [true, "add product rate"]
        
        
    },
    quantity: {
        type:String,
        required : [true, "add product quantity"]
        
        
    },
  
    
},{
    timestamps : true
})

module.exports = mongoose.model("foodapps", FoodAppSchema)