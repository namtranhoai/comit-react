function evenNumbers(maxNumber){
    for(i=0;i<=maxNumber;i++){
        i%2?'':console.log(i);
    };
}

let maxInputNumber = prompt("Enter max number (100):");
evenNumbers(Number(maxInputNumber));
evenNumbers(Number(39));
evenNumbers(Number(50));
evenNumbers(Number(-1));
evenNumbers(Number("43"));

function showUser(name, age, phone, street, postalCode, merried ){
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Phone: ${phone}`);
    console.log(`Street: ${street}`);
    console.log(`Postal code: ${postalCode}`);
    console.log(`Merried: ${String(merried)}`);
}

showUser("Nam", 38,"18920","Delaronde Rd","S7J",true);

console.log("----------- Fibonacci -----------");
console.log("----------- Print fibonacci nth -----------");

let fibonacci = (nth)=>{
    let fiNum=0;
    switch (nth){
        case 0: fiNum=0; break;
        case 1: 
        case 2: fiNum=1; break;
        default : fiNum = fibonacci(nth-1)+fibonacci(nth-2);break;
    }
    return fiNum;
}
/*
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(10));
console.log(fibonacci(12));
*/
let nthFibonacci = prompt("Which nth fibonacci do you want to print out?");
console.log(fibonacci(Number(nthFibonacci)));

console.log("----------- Check number is fibonacci nth -----------");

function showUserUpdate(showNameFunc, showAgeFunc){
    showNameFunc('Ozzie');
    showAgeFunc(38);
}
let showName = name => {
    console.log(`=============`);
    console.log(`=== ${name} ===`);
    console.log(`=============`);
}
let showAge = age =>{
    console.log(`Age: ${age}`);
}
let showMarried = merried=>{
    console.log(`Merried: ${String(merried)}`);
}
showUserUpdate(showName,showAge);//, showAge(38),"18920","Delaronde Rd","S7J",showMarried(true));