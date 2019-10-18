alert("Enter two numbers to see if the first is greater than the second");
const firstNumber = prompt("Which is the first number?");
const secondNumber = prompt("Which is the second number?");

if(firstNumber > secondNumber){
    alert("It is greater");
}else if(firstNumber < secondNumber){
    alert("It is less than");
}else{
    alert("It is the same");
}