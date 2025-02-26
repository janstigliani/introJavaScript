//provare le notazioni sia con funzione esterna e messa nella arrow, e direttamente nella arrow

const array1 = [23, 14, 56, 44, 3, 0, -1, 55, -12, 60, 8];

//esercizio 1: filtrare tutti i numeri minori o uguali a 0 (filter)

const underEqualZero = array1.filter(num => num <= 0);
console.log('1.1) numeri minori o uguali di 0', underEqualZero);

function filterUnderEqualZero(num){
    if(num <= 0){
        return true;
    }else{
        return false;
    }
}

const underEqualZero1 = array1.filter(filterUnderEqualZero);
console.log('1.2) numeri minori o uguali di 0', underEqualZero1);


//esercizio 2: convertire in gradi fahrenheit ipotizzando che l'unità di partenza sia celsius (map)

const convertToFahrenheit = array1.map(num => (num*(9/5))+32);
console.log('2.1) conversione celsius\farhenait', convertToFahrenheit);

function ToFahrenheitFunction(num){
    convertedNumber= (num*(9/5))+32;
    return convertedNumber;
}

const convertToFahrenheit1 = array1.map(ToFahrenheitFunction);
console.log('2.2) conversione celsius\farhenait', convertToFahrenheit1);


//esercizio 3: fare la media dei valori (reduce)

const mean = array1.reduce((a, c) => (a+c), 0) / array1.length;
console.log('3.1) media dei valori', mean)

function sum(a,c) {
    a += c;
    return a;
}

const mean1 = array1.reduce(sum, 0) / array1.length;
console.log('3.2) media dei valori', mean1);


//esercizio 4: restituire il valore più basso e il più alto (reduce)

const minMax = array1.reduce((a, c) => c === Math.min(...array1)|| c === Math.min(...array1), [-Infinity,Infinity]);
console.log('4.1) minimo e massimo', minMax)

function isMinMax(a,c) {
    const newAccumulator= []
    if (c === Math.min(array1)) {
        newAccumulator.push(c);
    } else if(c === Math.min(array1)){
        newAccumulator.push(c);
    }
    return newAccumulator;
}

const minMax1 = array1.reduce(isMinMax, []);
console.log('4.2) minimo e massimo', minMax1);


const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie'];

//5) filtrare tutti i nomi piu grandi di 4 caratteri (filter)

const namesSmallerThen4Char = array2.filter(str => str.length < 4);
console.log('5.1) nomi più piccoli di 4 caratteri', namesSmallerThen4Char);

function isSmallerThen4Char(str){
    if (str.length < 4) {
        return true;
    }else{
        return false;
    }
}

const namesSmallerThen4Char1 = array2.filter(isSmallerThen4Char);
console.log('5.2) nomi più piccoli di 4 caratteri', namesSmallerThen4Char1);


//6) trasformare tutte le stringhe in maiuscolo (map)

const upperCase = array2.map(str => str.toUpperCase());
console.log('6.1) stringhe maiuscole', upperCase);

function upperCaseFunction(str){
    strMai = str.toUpperCase();
    return strMai;
}
const upperCase1 = array2.map(upperCaseFunction);
console.log('6.2) stringhe maiuscole', upperCase1);


//7) mettere SOLO le iniziali maiuscole (map)

const capitalizeStr = array2.map(str => str[0].toUpperCase() + str.slice(1));
console.log('7.1) solo iniziali maiuscole', capitalizeStr);

function capitalizeStrFun(str) {
    strCap = str[0].toUpperCase() + str.slice(1);
    return strCap;
}

const capitalizeStr1 = array2.map(capitalizeStrFun);
console.log('7.2) solo iniziali maiuscole', capitalizeStr1);


//8) restiture una stringa composta dalle iniziale delle parole (reduce)

//9) somma tutti i caratteri di tutte le stringhe (reduce)

//10) eliminare le vocali dalle stringhe (map+filter)

// prima funzione normale poi arrowed

// const strNoVowels = array2.map(str => 
//                           .filter(char => char.toLowerCase !== "a" || char.toLowerCase !== "e" || char.toLowerCase !== "i" || char.toLowerCase !== "o" || char.toLowerCase !== "u"))
                          
// function singleChar(str) {
    
//     newArray = str.split("");
//     return newArray;
// }

// function isVowel(char) {
//     if (char.toLowerCase() !== "a" && 
//     char.toLowerCase() !== "e" && 
//     char.toLowerCase() !== "i" && 
//     char.toLowerCase() !== "o" && 
//     char.toLowerCase() !== "u" ) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const strNoVowels = array2.map(singleChar) 
//                           .filter(isVowel)
//                           //vanno ancora riunite
// console.log(strNoVowels);

function isVowel(char) {
    return !["a", "e", "i", "o", "u"].includes(char.toLowerCase());
}

const strNoVowels = array2.map(str => 
    str.split('').filter(isVowel).join('')
);
console.log('10.1) eliminare le vocali dalle stringhe', strNoVowels);


const strNoVowels1 = array2.map(str => 
    str.split('').filter(char => !["a", "e", "i", "o", "u"].includes(char.toLowerCase())).join('')
);
console.log('10.1) eliminare le vocali dalle stringhe', strNoVowels1);



//11) restituire un array di numeri che sono le lunghezze delle singole parole (map)

const array3 = [[1, 2, 3], [3, 2, 1, 0], [0, 0, 0, 0, 0]];

//12) restituire un array di numeri che sono le lunghezze dei sigoli array (map)

//13) sommare tutti i numeri in tutti gli array (reduce)

//14) sommare tutte le lunghezze degli array (reduce)

//15) sommare tutti i numeri con indice uguale e restituire un array di risultati (reduce)