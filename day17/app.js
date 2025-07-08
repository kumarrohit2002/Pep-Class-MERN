const express=require('express')

const app=express();

require('dotenv').config();


app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        success:true,
        message:'Server is Running',
        data:{}
    })
})


app.listen(2700,()=>{
    console.log('--------------Server is Running on Port 2700----------');
})





