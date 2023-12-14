const asyncHandler = require("express-async-handler");
const Food = require("../model/foodModel")



const createFood = asyncHandler( async (req, res)=>{
    

    const { section_name, image_url, product_name, one_liner, rate , quantity  } = req.body
    console.log(req.body)
   

    if(!section_name || !image_url || !product_name || !one_liner || !rate || !quantity ){
        res.status(400)
        throw new Error(" filed  mandatory")
    }
    
    
    const food1 = await Food.create({
        section_name,
        image_url,
        product_name,
        one_liner,
        rate,
        quantity




        
    }) 
    
    res.status(202).json(food1)
})


const getFoods = asyncHandler( async  (req, res)=>{
    const food = await Food.find()
   
    res.status(200).json(food)
    
})


const getFood = asyncHandler( async  (req, res)=>{
    const food = await Food.find({ _id: req.params.id});
    res.status(200).json(food)
    
})



const updateFood = asyncHandler( async  (req, res)=>{
    const food = await Food.find({ _id: req.params.id});
    
    

    if(!food){
        res.status(404);
        throw new Error('blog not found');
    }

   

    const food1 = await Food.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        }
    )
    res.status(200).json(food1);
    
})


const deleteFood = asyncHandler( async  (req, res)=>{
    const food = await Food.find({ _id: req.params.id});
    

    if(!food){
        res.status(404);
        throw new Error('blog not found');
    }

   
    await Food.findByIdAndRemove(
        req.params.id
    )
    res.status(200).json(food);
    
})






module.exports = {getFood, getFoods, deleteFood, updateFood, createFood}
