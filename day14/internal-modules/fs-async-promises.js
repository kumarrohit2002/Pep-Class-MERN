 const fsPromise=require('node:fs/promises');

 const main=async()=>{
    console.log('\n ---------start----------\n')
    
    const response1=await fsPromise.readFile('./temp.txt','utf-8');
    console.log(response1);
    console.log('\n ---------------middle----------\n')
    const response2=await fsPromise.readFile('./student.txt','utf-8');
    console.log(response2);
    
    console.log('-----------------end----------------')
}
   
main();
console.log('-----------------end file----------------')