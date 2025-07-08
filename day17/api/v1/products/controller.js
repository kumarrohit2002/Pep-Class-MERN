
const createProductController=async(req,res)=>{
    try {
        console.log('creating product...');
        console.log(req.body);


        return res.status(201).json({
            success:true,
            message:'product Created succefully',
            data:{}
        })
        
    } catch (error) {
        console.log(error);
    }
}



module.exports={
    createProductController
}