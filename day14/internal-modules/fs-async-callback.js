const fs=require('node:fs');

console.log('\n ---------start----------\n')

fs.readFile('./temp.txt','utf-8',(err,data)=>{
    if(err){
        console.log('Error reading file: ',err.message);
        return;
    }
    console.log('temp.txt -->',data);
});

console.log('\n ---------------middle----------\n')



fs.readFile('./student.txt','utf-8',(err,data)=>{
    if(err){
        console.log('Error reading file: ',err.message);
        return;
    }
    console.log('temp.txt -->',data);
});

console.log('-----------------end----------------')