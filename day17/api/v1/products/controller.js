const { Product } = require("../../../models/product_schema");

const createProductController=async(req,res)=>{
    try {
        const data=req.body;
        console.log('Data: ',data);

        const newProduct=await Product.create(data);

        return res.status(201).json({
            success:true,
            message:'product Created succefully',
            data:{newProduct}
        })

        
    } catch (error) {
        console.log('Error : ',error.code);
        console.log(Object.keys(error));
        if(error.code===11000  || error.name==='ValidationError'){
            return res.status(400).json({
            message:error.message,
            success:false,
            data:{}
        })
        }
        res.status(500).json({
            message:'Internal server Error',
            success:false,
            data:{}
        })
    }
}


const getAllProduct=async(req,res)=>{
    try {
        const products=await Product.find();
        res.status(200).json({
            sucess:false,
            message:'All data fetched successfully',
            data:{
                products,
            }
        })
        
    } catch (error) {
        res.status(500).json({
            message:'Internal server Error',
            success:false,
            data:{}
        })
    }
}

const updateProductController=async(req,res)=>{
    try {
        const {productId}=req.params;
        const data=req.body;

        const product=await Product.findByIdAndUpdate(productId,data,{new:true,runValidators:true});

        res.status(200).json({
            success:false,
            message:'Product Updated successfully',
            data:{
                product
            }
        })        

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message:'Internal server Error',
            success:false,
            data:{}
        })
    }
}

const deleleProductController=async(req,res)=>{
    try {
        const {productId}=req.params;
        const deletedProduct=await Product.findByIdAndDelete(productId);
        if(!deletedProduct){
            res.status(404).json({
                success:false,
                message:'Product Not Found',
                data:{}
            })
        }
        
        res.status(200).json({
            success:true,
            message:'Product Deleted successfully!!',
            data:{}
        })
    } catch (error) {
         console.log(error.message);
        res.status(500).json({
            message:'Internal server Error',
            success:false,
            data:{}
        })
    }
}



module.exports={
    createProductController,
    getAllProduct,
    updateProductController,
    deleleProductController
}