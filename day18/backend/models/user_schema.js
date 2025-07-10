const mongoose=require('mongoose')

const {Schema,model}=mongoose;
const userSchema=new Schema({
    name:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        trim:true,
        required:true,
    },
    gender:{
        type:String,
        enum:['male','female'],
    },
    role:{
        type:String,
        enum:['user,admin','super-admin'],
        default:'user'
    }
 
},{
    versionKey:false,
    timestamps:true
})

const UserModel=model('user',userSchema);

module.exports={UserModel};