const { UserModel } = require("../../../models/userSchema");
const { handleGenericAPIError } = require("../../../utils/controllerHelpers");

const sendUserBasicInfoController = (req, res) => {
    const userInfo = req.user;

    res.status(200).json({
        isSuccess: true,
        message: "User is valid!",
        data: {
            user: userInfo,
        },
    });
};



const updateUserDetails=async(req,res)=>{
    try {
        const user=req.user;
        const data=req.body;

        const UpdatedUser=await UserModel.findByIdAndUpdate(user._id,data);

        UpdatedUser.password=undefined;

        res.status(200).json({message:'Update Profile Successfully!!',isSuccess:true,data:{user:UpdatedUser}});


    } catch (error) {
        handleGenericAPIError('updateUserDetails',req,res,error);
    }
}


const getUserDetails=async(req,res)=>{
    try {

        const user=req.user;
        const userDetails=await UserModel.findById(user._id);

        userDetails.password=undefined;

        res.status(200).json({message:'Update Profile Successfully!!',isSuccess:true,data:{user:userDetails}});   
        
    } catch (error) {
        handleGenericAPIError('getUserDetails',req,res,error);
    }
}


module.exports = { sendUserBasicInfoController ,updateUserDetails, getUserDetails};

