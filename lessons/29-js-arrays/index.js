//Make an array of your siblings' names or your favorite movie characters' names.
let arrCharacters = ['Doremon','Nobita','Xuka','Chaien'];

//Make an array of your parents' names.
let arrParents = ['Mather','Father','Grant Ma', 'Grant Pa'] 

//Combine these two arrays using concat().
let arrConcat =  [];
arrConcat.concat(arrCharacters, arrParents);
console.log(arrConcat);

//Add your pets' names using push().
let arrPets = [];
arrPets.push('Tom');
arrPets.push('Muc');
arrPets.push('Hulky');
arrPets.push('Tony');
arrPets.push('Mike');
console.log(arrPets);

//Reverse the order of the array.
console.log(arrPets.reverse());

//Access one of your parents' names using the square bracket notation.
console.log(arrParents[3]);

//Update the name of one of your parents using the index and square bracket notation
arrParents[3] = 'New Parrent\'s name';
console.log(arrParents[3]);

//Loop over the array and log each item to the console
//use both a `for` loop and a `for..of` loop
// --- for 
for (let i = 0; i < arrParents.length; i++) {
    console.log( arrParents[i] );
}  
// --- for of
for (let parentName of arrParents) {
    console.log( parentName );
}

//# Extra Exercises
console.log(`---------------------------------`);
let favRecipe = {
    title : 'Mole',
    servings : 2,
    ingredients : ['cinnamon','cumin','cocoa']
}
console.log(favRecipe.title);
console.log(`Servings: ${favRecipe.servings}`);
for(let ingredient of favRecipe.ingredients){
    console.log(ingredient);
}

let book = {
    title : '',
    author: '',
    alreadyRead: false,
    showMessage:function(){
        if(this.alreadyRead){
            alert(`You already read "${this.title}" by ${this.author}.`);
        }else{
            alert(`You still need to read "${this.title}" by ${this.author}.`);
        }
    }
}
let arrBooks = [];
let bookOne= Object.assign({},book);
bookOne.title = 'My small dog',
bookOne.author = 'Herry';
bookOne.alreadyRead = false;
arrBooks.push(bookOne);

let bookSecond= Object.assign({},book);
bookSecond.title = 'My small cat',
bookSecond.author = 'Tom';
bookSecond.alreadyRead = true;
arrBooks.push(bookSecond);

let bookThird= Object.assign({},book);
bookThird.title = 'My small donkey',
bookThird.author = 'Mike';
bookThird.alreadyRead = false;
arrBooks.push(bookThird);


for (let i = 0; i < arrBooks.length; i++) {
    arrBooks[i].showMessage();
};

console.log(`---------------------------------`);
function map(arr, func) {
    // todo, turn arr into new array using func
    let ret = [];
    for (let i = 0; i < arr.length; i++) {
        ret.push(func(arr[i]));
    } 
    return ret;
}

const result = map([1, 2, 3], function(item) {
return item * 2;
});

console.log(result); // [2, 4, 6]