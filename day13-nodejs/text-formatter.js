// MODULE: internal-module, user-defined-module, external-module

console.log('----- ! Loading text-formater.js file ------------')

const getCaptaizeText=(str)=>{
    const arr=str.split(' ');
    const newArr=arr.map((ele)=>{
        let char=ele[0].toUpperCase();
        let remainigWord=ele.slice(1);
        return `${char}${remainigWord}`
    })
    return newArr.join('');

}



const helloFun=()=>{
    console.log('Hello fun is called');
}

console.log('------! Exporting the exports from text-formatter ----------')

module.exports={
    getCaptaizeText:getCaptaizeText,
    helloFun:helloFun
}   
