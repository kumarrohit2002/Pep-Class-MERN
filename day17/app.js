const express=require('express')

const app=express();

require('dotenv').config();
require('./config/db')
const {apiRouter}=require('./api/v1/routes');

// app level MiddleWare
app.use(express.json());

//middleware
app.use((req,res,next)=>{
    console.log('-------------------');
    console.log(new Date(),req.method,req.url);
    console.log('------------------');
    next();
})


app.use('/api/v1',apiRouter)



app.listen(2700,()=>{
    console.log('--------------Server is Running on Port 2700----------');
})


 


