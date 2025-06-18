const arr=["Cat","Dog","Element","Tiger"];

// //for
// for(let i=0;i<arr.length;i++){
//     const ele=arr[i];
//     console.log(ele,i);
// }

// for in
// for(let i in arr){
//     const ele=arr[i];
//     console.log(ele,i);
// }

// // for of
// for(let i of arr){
//     console.log(i)
// }

// forEach

arr.forEach(element => {
    console.log(element)
});


arr.forEach((a,b,c,d) => {
    console.log(a,b,c,d)
});


