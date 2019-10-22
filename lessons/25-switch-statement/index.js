let weekdayNumber = prompt("Enter weekdayNumber?");
let retMessage = "";

console.log("----- if ... else ... -----");
if(weekdayNumber==1){
    console.log("Today is Monday");
}else if(weekdayNumber==2){
    console.log("Today is Tuesday");
}else if(weekdayNumber==3){
    console.log("Today is Wednesday");
}else if(weekdayNumber==4){
    console.log("Today is Thursday");
}else if(weekdayNumber==5){
    console.log("Today is Friday");
}else if(weekdayNumber==6){
    console.log("Today is Saturday");
}else if(weekdayNumber==7){
    console.log("Today is Sunday");
}else{
    console.log("Error: Number not between 1-7");
}
console.log("----- switch { case ...: ....}-----");
switch(Number(weekdayNumber)){
    case 1: retMessage = "Today is Monday";break;
    case 2: retMessage = "Today is Tuesday";break;
    case 3: retMessage = "Today is Wednesday";break;
    case 4: retMessage = "Today is Thursday";break;
    case 5: retMessage = "Today is Friday";break;
    case 6: retMessage = "Today is Saturday";break;
    case 7: retMessage = "Today is Sunday";break;
    default: retMessage = "Error: Number not between 1-7";break;
}
console.log(retMessage);