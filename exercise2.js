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


//ESERCIZIO CODE-WARS


function replace(s) {
    let modS = "";
    for (i = 0; i < s.length; i++) {
        
        let character = s.charAt(i);
        if (character === "a" || character === "A" || character === "e" || character === "E" || character === "i" || character === "I" || character === "o" || character === "O" || character === "u" || character === "U") {
            character = "!";
            // modS += character;
        }
        // else {
        //     modS += character;
        // }
        modS += character;
    }
    return modS;
}

replace("Hi, I'm Jan!");
