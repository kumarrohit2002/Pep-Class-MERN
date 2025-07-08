const express=require('express')

const app=express();

require('dotenv').config();

// app level MiddleWare
app.use(express.json());

//middleware
app.use((req,res,next)=>{
    console.log('-------------------');
    console.log(new Date(),req.method,req.url);
    console.log('------------------');
    next();
})

app.get('/',(req,res)=>{
    res.json({
        success:true,
        message:'Server is Running',
        data:{}
    })
})

app.get('/hello',(req,res)=>{
    res.json({
        success:true,
        message:'hii hello how are you',
        data:{}
    })
})

// middleware
app.use((req,res,next)=>{  //it will call when route not match
    console.log('Route Not match');
    next();
})


app.listen(2700,()=>{
    console.log('--------------Server is Running on Port 2700----------');
})


 


