// object store key value pair keys should be string and symbol

const obj={
    name:'Rohit Kumar',
    address:'Bihar',
    course:{
        branch:'CSE',
        specilation:'Data Science'
    }
}

//update
obj.name='Rohit Ranjan'
// add
obj.collage='LPU'
obj.rollNo=23 

//delete
delete obj.collage

console.log(obj);



// naming convention of variable not start with number


// const person = {
//     name: 'Rohit',
//     height: 0.14224,
//     weight: 53,
//     collage: 'LPU',
//     rollNumaber: '23',
//     getBMI: function () {
//         const BMI=(this.weight) / (this.height ** 2);
//         console.log(`Weight: ${this.weight}, Height: ${this.height} and BMI: ${BMI}`);
//         if(BMI<18.5){
//             console.log('Underweight')
//         }else if (BMI<24.9) {
//             console.log('Healthy Weight')
            
//         } else if(BMI<29.9){
//             console.log('Overweight')
            
//         }else{
//             console.log('Obese')

//         }
//     }
// };

// person.getBMI();

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

// const whichKey=prompt('What value do you want??');
// console.log(person[whichKey])

//-----------------------------------shallow copy --- deep copy---------------

// Primitive types in JavaScript are immutable, meaning their values cannot be changed once set.

// Examples: // String // Number// Boolean// Null// Undefined// BigInt// Symbol

// Non-primitive types are mutable, meaning their contents can be changed.

// Examples: // Object// Array// Function

const person1 = {
    name: 'Rohit',
    height: 0.14224,
    weight: 53,
    collage: 'LPU',
    rollNumaber: '23',
    obj:{
        n:2,
        b:442
    }
};


// const person2=person1;
// person2.name='hello'
// person1.collage='lpu'
// console.log(person2)  //update
// console.log(person1) //update


//-------------------DE-structuring

// const {name} = {
//     name: 'Rohit',
//     height: 0.14224,
//     weight: 53,
//     collage: 'LPU',
//     rollNumaber: '23',
    
// };
// console.log(name)

// const {collage:c1}=person1;
// console.log(c1)


const p2= {...person1}; // this not deep copy  (...) spred operator

console.log(p2)
console.log('--------------------------------------------------')
p2.name='abc'
console.log(p2)  //update
console.log(person1)  //not update
console.log('---------------------------------------------')


p2.obj.n=10
console.log(p2) //update 
console.log(person1) //update  why search