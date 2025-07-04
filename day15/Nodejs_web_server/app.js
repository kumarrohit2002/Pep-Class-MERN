const http=require('http');

const app=http.createServer((req,res)=>{
    console.log('----------req received----------');
    res.setHeader()
    if(req.method==='GET'){
        switch(req.url){
            case 'api/v1/students':{
                const obj={name:'rohit',city:'chhapara'}
                res.end(JSON.stringify(obj,null,4));
                break;
            }
            case 'api/v1/products':{
                const obj={name:'rohit',city:'chhapara'}
                res.end(JSON.stringify(obj,null,4));
                break;
            }
            default:{
                const obj={name:'rohit',city:'chhapara'}
                res.end(JSON.stringify(obj,null,4));
                break;

            }
        }

        const obj={name:'rohit',city:'chhapara'}
        res.end(JSON.stringify(obj,null,4));
    }else{
        console.log(Object.values(req));
        res.end('Hello')
    }
});


app.listen(2700,()=>{
    console.log('server is running on Port: 2700');
})

