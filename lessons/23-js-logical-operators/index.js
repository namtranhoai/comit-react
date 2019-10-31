const currentHour = prompt("Which is the current hour (0-23)?");

if(currentHour>23 || currentHour < 0){
    alert("Your input is incorrect ");
}else if(currentHour<8 || currentHour >=18){
    alert("That hour is outside of office hours");
}else{
    alert("Open, come in!");
} 