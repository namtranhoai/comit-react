
alert("Enter two numbers to see if the first is greater than the second");
const firstNumber = prompt("What is the first number?");
const secondNumber = prompt("What is the second number?");
const accurate = confirm(firstNumber > secondNumber);
console.log("First number:",firstNumber);
console.log("Second number:",secondNumber);
console.log("Were we accurate?",accurate);

