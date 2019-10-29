//- Create a variable and store the value `[1, 2, 3, 4, 5]`
let arr =  [1, 2, 3, 4, 5];

//- Map the above array into a new array of squared values and store that in a new variable
let arrSquared = arr.map((num) => num*num);

//- Log both arrays to the console to view the difference
console.log(arr, arrSquared);

//- Create a variable and store the value `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`
let arrSecond = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//- Filter the above values into even numbers only and store the result in a new variable
let arrSecondEven = arrSecond.filter((num) => !(num%2));

//- Filter the above values into odd numbers only and store the result in a new variable
let arrSecondOdd = arrSecond.filter((num) => num%2);

//- Log all 3 variables
console.log(arrSecond,arrSecondEven,arrSecondOdd);

//- Create an array of 5 or more objects and store it in a variable
//- Give each object a "name", "age", and "city" property with a value as well
let arrPeople = [
    { name : `Mary`, age  : 9, city : `Saskatoon`},
    { name : `Jony`, age  : 7, city : `Regina`},
    { name : `Laura`, age  : 13, city : `Toronto`},
    { name : `Bamby`, age  : 23, city : `Vancover`},
    { name : `Tesdy`, age  : 15, city : `Emonton`},
    { name : `Mark`, age  : 35, city : `Cangary`},    
]
//- Filter the above array into a new variable containing only people over the age of 30
let arrPeopleOlder30 = arrPeople.filter((people) => people.age > 30);
//- Filter the above array into a new variable containing only people less than 20 AND live in Saskatoon
let arrPeopleYXEYounger20 = arrPeople.filter((people) => people.age<20&&people.city=='Saskatoon');

//- Map the above array into a new array containing just the age's of everyone and store it in a  variable
let arrPeopleAge = arrPeople.map((people) => people.age);

//- Log all of the arrays to the console
console.log(arrPeople);
console.log(arrPeopleOlder30);
console.log(arrPeopleYXEYounger20);
console.log(arrPeopleAge);


// #Bonus
//- Create a function called `stripVowels` that takes in a string and returns the string with all vowels removed
let stripVowels = str =>str.split('').filter((char) => ![`a`,'e',`i`,`o`,`u`].includes(char.toLowerCase())).join('');

let stripVowels2 = str => {
    //- Convert the passed in string into an array of individual characters, and then use `filter` to only keep consonants.
    //- Turn the resulting array back into a string and return it to the user
    let arr = str.split();
    let arrFilter = arr.filter((char) =>  ![`a`,'e',`i`,`o`,`u`].includes(char.toLowerCase()));
    return arrFilter.join(''); 
}

// - Call & log the output of this function 3 times with different strings each time
console.log(stripVowels(`Convert the passed in string into an array`));
console.log(stripVowels(`turn the resulting Array back into a string`));
console.log(stripVowels(`Call & log the Output`));



