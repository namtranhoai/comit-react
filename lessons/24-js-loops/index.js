console.groupCollapsed("Add all the numbers bettwen 0 and 1000 using for statement");
let i=0;
break400: for(;i<=1000;){
    if(i>400) break break400;
    console.log(i++);
}
console.groupEnd()
console.groupCollapsed("Show numbers from 0 to 10");
for(i=0;i<=10;i++){
    console.log(i);
}
console.groupEnd()
console.groupCollapsed("Show numbers from 100 to 0");
i=100;
while(i>0){
    console.log(i--);
}
console.groupEnd()
console.groupCollapsed("Show even numbers between 0 and 100");
i=0;
do{
    if(i % 2 == 0){
        console.log(i);
    }
    i++;
}while(i<=100);
console.groupEnd()
console.groupCollapsed("Produce the following output");
for(i=0;i<=20;i++){
    let outputResult = "";
    for(j=0;j<=i;j++){ 
        outputResult += "*";
    };            
    console.log(outputResult);
}
console.groupEnd()