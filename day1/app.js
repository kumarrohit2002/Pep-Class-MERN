// console.log('Hello js')

// let,const or var
// {
// let a=10
// a=20
// a='rohit'
// console.log(a)
// }

// console.log(a)  // error a is not defined

{
const b=10
// b=20 // error constant type not defined again

}

// console.log(b)  //error b is not defined


// console.log(age)
// var age=23
// console.log(age)
// var age=24
// console.log(age)


let op=1+'1'
console.log(op)
op='1'+1
console.log(op)
op='1'+'1'
console.log(op)


op='1'-1
console.log(op)
op=1-'1'          //0
console.log(op)
op='a'-1          //0
console.log(op)
op='a'+1          //  a1
console.log(op)
op='1'+'a'        // 1a
console.log(op)

op='1'*'a'        // NAN
console.log(op)

op='1'/'a'        // NAN
console.log(op)

//type coersion

op='10'/'2'  // 5
console.log(op) 



//Function

function calulate(){
    let juice=50;
    let gst=0.1;
    let juiceAmount=juice+juice*gst;
    console.log(juiceAmount)
}

calulate()

