const express=require('express')
const cors =require('cors');

const app=express();
app.use(cors(
{ origin: 'http://localhost:5173', // Adjust this to your frontend URL
 credentials: true // Allow credentials (cookies, authorization headers, etc. to be sent)  
}
))
const cookieParser = require('cookie-parser');
app.use(cookieParser());

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
    console.log('------Server is Running on: http://localhost:2700 --------');
})


 


