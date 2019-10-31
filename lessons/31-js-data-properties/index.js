
// - Prompt the user to enter their 3 favourite movies, separated by a comma
let sentenceFirst = prompt("Enter their 3 favourite movies, separated by a comma:");
 
//- Turn their response into an array and log each movie
let arrSentenceFirst = sentenceFirst.split(',');
console.log(arrSentenceFirst);

//- Prompt the user to enter a sentence that they would like reversed
let sentenceSecond = prompt("Enter a sentence that they would like reversed?");
//let arrSentenceSecond = sentenceSecond.split(' ');
//console.log((arrSentenceSecond.reverse()).join(' '));

//- Create a function called "reverseString" that reverses what they orignially input
reverseString = strInput =>{
    let retReverseString = ``;
    for(i=0;i<strInput.length;i++){
        retReverseString = strInput[i]+ retReverseString;
    }
    return retReverseString;
}
console.log(reverseString(sentenceSecond))
//- Don't use a loop, turn the string into an array and reverse it using the methods from the tutorials above
reverseStringSecond = strInput =>{
    //let retReverseString = ``;
    let arrSentenceSecond = sentenceSecond.split('');
    return arrSentenceSecond.reverse().join('');
}

// - Alert the new string back to the user

alert(reverseStringSecond(sentenceSecond));
