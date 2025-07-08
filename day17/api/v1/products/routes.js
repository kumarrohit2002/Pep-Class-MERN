const express=require('express');
const { createProductController } = require('./controller');

const productRouter=express.Router();


productRouter.get('/',(req,res)=>{
    res.json({
        success:true,
        message:'Product List Fetched!!',
        data:{}
    })
})

productRouter.post('/',createProductController);





module.exports={productRouter};