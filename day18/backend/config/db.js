const mongoose=require('mongoose');

mongoose.connect(process.env.MONGO_DB_URL,{
    dbName:'day17',
}).then(()=>{console.log('----------Database Connected-------')}).catch((err)=>{
    console.log('---------------Database Issue----------');
    console.log(err.message);
    console.log('------------------------------------');
});







