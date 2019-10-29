//Orange, Apple, Cherry, Banan, Nut
//- Prompt the user to enter their top 5 favourite fruits (in order), separated by a comma
let input = prompt(`Enter their top 5 favourite fruits (in order), separated by a comma`);
console.log(input);
//- Turn their response into an array
let arrInput = input.split(',');
console.log(arrInput);
// - Using array destructuring:
    //- Assign 3 variables for their first, second, and third favorite
let [first, second, third] = input.split(',');
console.log(first, second, third);   
    //- Assign the rest of the fruits into a variable
let [,,,...rest] = input.split(`,`);
 //- Alert back to the user their top 3 favorite fruits
alert(`Top 3 favorite fruits: ${first}, ${second} ,${third} !`)
 //- Show another alert that shows the rest of the fruits that didnt make the top 3
for(let fruit of rest){
    alert(`Rest of the fruits that didnt make the top 3: ${fruit}`);
}