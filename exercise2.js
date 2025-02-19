// ESERCIZIO 1 MINIMUM

//versione normale

function min(number1=0, number2=number1) {
    if(number1<number2){
        return number1;
    }
    else{
        return number2;
    }
}

console.log(min(0, 10));
console.log(min(0, -10));

//versione arrowed

const min1 = (number1=0, number2=number1) => {
    if(number1<number2){
        return number1;
    }
    else{
        return number2;
    }
}

console.log(min1(10));
console.log(min1(0, -10));

//ESERCIZIO 2 RECOURSION

//versione normale

function isEven(num) {
    num = Math.abs(num); //modulo per rendere i num negativi positivi
    if(num===0){
        return true;
    }
    if(num===1){
        return false;
    }
    return isEven(num-2);
}

console.log(isEven(22));
console.log(isEven(21));
console.log(isEven(0));
console.log(isEven(1));

// versione arrowed

const isEven1 = (num) => {
    num = Math.abs(num);
    if(num===0){
        return true;
    }
    if (num===1){
        return false;
    }
    return isEven(num-2);
}

console.log(isEven1(-22));
console.log(isEven1(21));
console.log(isEven1(0));
console.log(isEven1(-1));

//ESERCIZIO 3 Bs E COUNT-CHARACTERS

//Versione normale

function countBs(word) {

    let counterBs = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i]=== "B") {
            counterBs ++
        } 
        
    }
    return counterBs;
}

// console.log(countBs("Bob"));
// console.log(countBs("BoB"));

//Versione arrowed

const countBs1 = (word) =>{
    let counterBs = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i]=== "B") {
            counterBs ++
        } 
        
    }
    return counterBs;
}

// console.log(countBs1("Bob"));
// console.log(countBs1("BoB"));

//Versione conta-tu normale

function countChar(word="", char="") {

    let counterChar = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i]=== char) {
            counterChar ++
        } 
        
    }
    return counterChar;
}

console.log(countChar("Elettronica", "e"));
console.log(countChar("mamma", "m"));
console.log(countChar("kappa", 1));

//Versione conta-tu arrowed

const countChar1 = (word="", char="") => {
    let counterChar = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i]=== char) {
            counterChar ++
        } 
        
    }
    return counterChar;
}

console.log(countChar1("Elettronica", "e"));
console.log(countChar1("mamma", "m"));
console.log(countChar1("kappa", 1));


//ESERCIZIO 1 CODE-WARS (REPLACE VOWELS)


function replace(s) {
    let modS = "";
    for (i = 0; i < s.length; i++) {
        
        let character = s.charAt(i);
        if (character === "a" || character === "A" || character === "e" || character === "E" || character === "i" || character === "I" || character === "o" || character === "O" || character === "u" || character === "U") {
            character = "!";
        }
        modS += character;
    }
    return modS;
}

replace("Hi, I'm Jan!");

//ESERCIZIO 2 CODE-WARS (WIDE-MOUTH FROG)

function mouthSize(animal) {
    animal = animal.toLowerCase()
    if(animal !== "alligator"){
      return "wide";
    }
    return "small"
  }

// Versione migliore

// function mouthSize(animal) {
//     return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
//   }

// Versione code golf (arrowed)

// const mouthSize = (animal) => animal.toLowerCase() == "alligator" ? "small" : "wide";

//ESERCIZIO 3 CODE-WARS (SQUARE-SUM)

numbers = "21, 12, 2000"
number1 = parseInt(numbers)

console.log(numbers)

//ESERCIZIO 4 CODE-WARS (bool to yes/no)

const boolToWord = bool => bool === true ? 'Yes' : 'No'

//ESERCIZIO 5 CODE-WARS (even*8/odd*9)

const simpleMultiplication = number => number % 2 === 0 ? number * 8 : number * 9;

//ESERCIZIO 6 CODE-WARS (Personalized Message)

const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'

//ESERCIZIO 7 CODE-WARS (Square Every Digit)

function squareDigits(numbers){
    numbers = numbers.toString();
    let sqrtNum= 0;
    for (i=0; i<numbers.length; i++){
      numbers= numbers[i];
      sqrtNum = numbers*numbers
    }
    return sqrtNum;
  }

  
  console.log(squareDigits(22354));
  

