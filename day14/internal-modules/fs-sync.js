const fs=require('node:fs');

console.log('\n ---------start----------\n')

const response1=fs.readFileSync('./temp.txt','utf-8');
console.log(response1);
console.log('\n ---------------middle----------\n')
const response2=fs.readFileSync('./student.txt','utf-8');
console.log(response2);

console.log('-----------------end----------------')