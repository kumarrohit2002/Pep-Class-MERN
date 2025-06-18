console.log('Array and Callbacks');


// const arr=['A','B','C','D','E']


// //READ
// console.log(arr)

// const [x,y,z]=arr;
// console.log(x,z)// A C


// ---------------------------------------------------------

// const arr=['A','B','C','D','E',1]
// arr.push('honda')
// arr.unshift('kai') //add at the first
// arr.shift() //remove first element

// console.log(arr)



// -----------------------------------------------------
// const arr=['A','B','C','D','E',1]
// arr.splice(1,0,'Kai','dyd','honda') // add new ele
// arr.splice(1,2,'Kai','dyd','honda') //remove & add
// arr.splice(1,1,) //remove ele
// console.log(arr)


// ----------------------------------------
// const arr=['A','B','C','D','E',1]

// console.log(arr.at(2));
// console.log(arr.indexOf('D'));


//----------------------------------------
// const arr=[
//     {name:'rohit',address:'bihar'},
//     {name:'Aniket',address:'up'},
//     {name:'Ankita',address:'punjab'},
// ]

// console.log(arr.indexOf({name:'Ankita',address:'punjab'}));  // -1


// ------------------------------------------------------------------------------
// NaN==NaN -> false
// 10=='10' ->true
// 10==='10' ->false


//object comparsion

// if({name:'rohit'}=={name:'rohit'}){  //false
//     console.log(true)
// }else{
//     console.log(false)
// }


// ----------------------------------------------------------------------------------

// -1 -> true 

// const p1={name:'rohit'}
// const p2={...p1}

// if(p1==p2){  //false  resion diff address
//     console.log(true)
// }else{
//     console.log(false)
// }

// if({}=={}){  //false  resion diff address
//     console.log(true)
// }else{
//     console.log(false)
// }

// ------------------------------------------

// const arr=['a','c','x','a','g']

// console.log(arr.lastIndexOf('a')) //3

// if(arr.indexOf('a')){ //false
//     console.log('Present')
// }



// ------------------------------------------- CallBack function ------------------

// const myfun=(a,b,c,d)=>{  //Iteration  method
//     if(a=='xy') return true;
//     else false;
// }

// const arr=['ab','mn','xy','lm','ab']

// const ele=arr.find(myfun)
// console.log(ele)  //ab


// -------------------------------------------------------

// const myfun=(a,b,c,d)=>{
//     // console.log(a)
//     if(a.name=='Aniket') return true;
//     else false;
// }

// const arr=[
    //     {name:'rohit',address:'bihar'},
    //     {name:'Aniket',address:'up'},
    //     {name:'Ankita',address:'punjab'},
    // ]
    
    // const ele=arr.findIndex(myfun)  //index of element
    // console.log(ele) 
    
    
    
    // ---------------------------- Search method -----------------
    
    const myfun=(elem)=>{
        if(elem.score<25) return {...elem,remark:'fail'}
        else return {...elem,remark:'pass'}
    }
const arr=[
    {name:'rohit',address:'bihar',score:26},
    {name:'Aniket',address:'up',score:24},
    {name:'Ankita',address:'punjab',score:35},
]

const ele=arr.map(myfun)  //index of element
console.log(ele) 
