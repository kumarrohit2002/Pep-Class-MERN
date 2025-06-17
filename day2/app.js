// function

console.log('Day 2')


// 3. assiment function
const printBillForAll=function(foodAmount,clothsAmount,drinksAmount){
    printBill4('food Bill',foodAmount);
    printBill4('Cloths Bill',clothsAmount);
    printBill4('Drinks Bill',drinksAmount);
}

// 4. Arrow function 
let printBill4=(price)=>{
    console.log(`${price}`);
}

// printBill3(4545)
// printBill4(45345)

let calculateBillAmountForFood=(price)=>{
    let bill= price*1.05;
    printBill4(bill)
    return bill;
}
let calculateBillAmountForCloths=(price)=>{
     let bill= price*1.02;
         printBill4(bill)

    return bill;
}
let calculateBillAmountForDrinks=(price)=>{
     let bill= price*1.2;
         printBill4(bill)
    return bill;
}

// Higher Function -->
// A function which accepts another function as a parameter Or return a function
const generateBill=(food,cloth,drinks,printBill4)=>{
    //HOF
    const foodAmount=calculateBillAmountForFood(food);
    const clothsAmount=calculateBillAmountForCloths(food);
    const drinksAmount=calculateBillAmountForDrinks(food);

    finalAmount=foodAmount+clothsAmount+drinksAmount;

    printBill4(finalAmount);
    
}

generateBill(20,30,10,printBill4);





