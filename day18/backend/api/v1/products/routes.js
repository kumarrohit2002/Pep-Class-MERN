const express=require('express');
const { createProductController,getAllProduct, updateProductController,deleleProductController } = require('./controller');

const productRouter=express.Router();


productRouter.get('/',getAllProduct)

productRouter.post('/',createProductController);

productRouter.patch('/:productId',updateProductController);
productRouter.delete('/:productId',deleleProductController);



module.exports={productRouter};