const array1 = [23, 14, 56, 44, 3, 0, -1, 55, -12, 60, 8];

//esercizio 1: filtrare tutti i numeri minori o uguali a 0
function removePositiveNumbers(arrayOfNumbers) {
    const newArray = [];
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
        if (element <= 0) {
            newArray.push(element);
        }
    }
    return newArray;
}
const arrayResult1 = removePositiveNumbers(array1);
console.log('array numeri negativi', arrayResult1);

//esercizio 2: convertire in gradi fahrenheit ipotizzando che l'unità di partenza sia celsius
function convertToFahrenheit(arrayOfNumbers) {
    const newArray = [];
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
        newArray.push(Math.round((element * (9 / 5)) + 32));
    }
    return newArray;
}
const arrayResult2 = convertToFahrenheit(array1);
console.log('conversione arrotondata gradi fahrenheit', arrayResult2);

//esercizio 3: fare la media dei valori
function calculateMidValue(arrayOfNumbers) {
    let accumulator = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
        accumulator = accumulator + element;
    }
    let midValue = accumulator / arrayOfNumbers.length;
    midValue = Math.round(midValue * 100) / 100;
    return midValue;
}
const arrayResult3 = calculateMidValue(array1);
console.log('calcolo media', arrayResult3);

//esercizio 4: restituire il valore più basso e il più alto
function minMax(arrayOfNumbers) {
    const arrayMinMax = [];
    let minNum = Math.min(...arrayOfNumbers);
    let maxNum = Math.max(...arrayOfNumbers);
    arrayMinMax.push(minNum, maxNum);
    return arrayMinMax;
}
const arrayResult4 = minMax(array1);
console.log('trova minimo e massimo', arrayResult4);



const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie'];

//5) filtrare tutti i nomi piu grandi di 4 caratteri
function filterCharLenght4(arrayOfStrings) {
    let newArray = [];
    for (let i = 0; i < arrayOfStrings.length; i++) {
        const element = arrayOfStrings[i];
        if (element.length <= 4) {
            newArray.push(element);
        }
    }
    return newArray;
}
const arrayResult5 = filterCharLenght4(array2);
console.log('nomi più piccoli di 4 caratteri', arrayResult5);

//6) trasformare tutte le stringhe in maiuscolo
function toUpperCase(arrayOfStrings) {
    let newArray=[];
    for (let i = 0; i < arrayOfStrings.length; i++) {
        const element = arrayOfStrings[i].toUpperCase();
        newArray.push(element);
    }
    return newArray;
}
const arrayResult6 = toUpperCase(array2);
console.log('trasformo in maiuscolo', arrayResult6);

//7) mettere SOLO le iniziali maiuscole

function toUpperCaseFirstLetter(arrayOfStrings) {
    let newArray = [] ;
     
        for (let I = 0; I < arrayOfStrings.length; I++) {
            let element = arrayOfStrings[I];
            let newElement = element.slice(0,1).toUpperCase() + element.slice(1); //slice crea una nuova stringa, la prima è formata solo dal primo carattere di element, l'altra dal resto. sommando le due cose otteniamo la parola modificata.
            newArray.push(newElement);                                           
            }
    return newArray;
}
const arrayResult7 = toUpperCaseFirstLetter(array2);
console.log('trasformo in maiuscolo la prima lettera', arrayResult7);

// Versione modificata Copilot, usa charAt(index) al posto del primo slice

// function toUpperCaseFirstLetter(arrayOfStrings) {
//     let newArray = [] ;
     
//         for (let I = 0; I < arrayOfStrings.length; I++) {
//             let element = arrayOfStrings[I];
//             let newElement = element.charAt(0).toUpperCase() + element.slice(1); //charAt(index) restituisce una string nuova contenente il carattaere indicato dall'indice
//             newArray.push(newElement);                                           //slice crea una nuova stringa, a partire dal primo carattere di element. sommando le due cose otteniamo la parola modificata.
//             }
//     return newArray;
// }
// const arrayResult7 = toUpperCaseFirstLetter(array2);
// console.log('trasformo in maiuscolo la prima lettera', arrayResult7);


//8) restiture una stringa composta dalle iniziale delle parole

function newStringFirstLetters(arrayOfStrings) {
    let counter = "";

    for (let I = 0; I < arrayOfStrings.length; I++) {
        let element = arrayOfStrings[I];
        counter += element.slice(0,1); //bastava usare [0], ma slice è più figo
    }
    return counter;
}

const arrayResult8 = newStringFirstLetters(array2);
console.log('prendo la prima lettera da ogni parola', arrayResult8);

//9) contare tutti i caratteri di tutte le stringhe

function charSumAllStrings(arrayOfStrings) {
    let counter = 0;

    for (let I = 0; I < arrayOfStrings.length; I++) {
        let element = arrayOfStrings[I];
        counter += element.length;
    }
    return counter;
}

const arrayResult9 = charSumAllStrings(array2);
console.log('contare tutti i caratteri di ogni stringa', arrayResult9);

//10) eliminare le vocali dalle stringhe

function replaceVowels(arrayOfStrings) {
    let newArray = [];
    for (let I = 0; I < arrayOfStrings.length; I++) {
        const element = arrayOfStrings[I];
        let finalString = ""
        for (let j = 0; j < element.length; j++) {
            let newElement = element.charAt(j);
            if (newElement === "a" || newElement === "e" || newElement === "i" || newElement === "o" || newElement === "u") {
                newElement = " ";
                finalString += newElement;
            } else{
                finalString += newElement;
            }
        }
        newArray.push(finalString);
    }
    return newArray;
}

const arrayResult10 = replaceVowels(array2);
console.log('elimino vocali', arrayResult10);

//11) restituire un array di numeri che sono le lunghezze delle singole parole

function arrayStringLength(arrayOfStrings) {
    let newArray = [];
    for (let I = 0; I < arrayOfStrings.length; I++) {
        const element = arrayOfStrings[I].length;
        newArray.push(element);
    }
    return newArray;
}

const arrayResult11 = arrayStringLength(array2);
console.log('array lunghezza stringhe', arrayResult11);


const array3 = [[1, 2, 3], [3, 2, 1, 0], [0, 0, 0, 0, 0]];

//12) restituire un array di numeri che sono le lunghezze dei sigoli array

function arraylength(arrayOfArray) {
    const newArray = [];
    for (let I = 0; I < arrayOfArray.length; I++) {
        const element = arrayOfArray[I];
        newArray.push(element.length);
    }
    return newArray
}

const arrayResult12 = arraylength(array3);
console.log('lunghezza di array in array', arrayResult12);

//13) sommare tutti i numeri in tutti gli array

function arraysSum(arrayOfArray) {
    let counter = 0;
    for (let I = 0; I < arrayOfArray.length; I++) {
        const element = arrayOfArray[I];
        for (let j = 0; j < element.length; j++) {
            const number = element[j];
            counter += number;
        }
    }
    return counter
}

const arrayResult13 = arraysSum(array3);
console.log('somma di tutti i numeri in array di array', arrayResult13);

//14) sommare tutte le lunghezze degli array

function arrayLengthSum(arrayOfArray) {
    let counter = 0;
    for (let i = 0; i < arrayOfArray.length; i++) {
        const element = arrayOfArray[i];
        counter += element.length;
    }
    return counter;
}

const arrayResult14 = arrayLengthSum(array3);
console.log('somma delle lunghezze degli array', arrayResult14);

//15) sommare tutti i numeri con indice uguale e restituire un array di risultati

// function arrayIndexSum(arrayOfArray) {
//     let newArray = [];
//     let element0 = 0;
//     let element1 = 0;
//     let element2 = 0;
//     let element3 = 0;
//     let element4 = 0;
//     for (let I = 0; I < arrayOfArray.length; I++) {
//         const element = arrayOfArray[I];
//         element0 += element[0];
//         element1 += element[1];
//         element2 += element[2];
//         element3 += element[3];
//         element4 += element[4];
//     }
//     newArray.push(element0, element1, element2, element3, element4)
// }

//fatta da copilote

function arrayIndexSum(arrayOfArray) {
    let newArray = [];
    let maxLength = 0;

    // Find the maximum length of the arrays
    for (let i = 0; i < arrayOfArray.length; i++) {
        if (arrayOfArray[i].length > maxLength) {
            maxLength = arrayOfArray[i].length;
        }
    }

    // Initialize newArray with zeros
    for (let i = 0; i < maxLength; i++) {
        newArray.push(0);
    }

    // Sum the elements with the same index
    for (let i = 0; i < arrayOfArray.length; i++) {
        for (let j = 0; j < arrayOfArray[i].length; j++) {
            newArray[j] += arrayOfArray[i][j];
        }
    }
    return newArray;
}

const arrayResult15 = arrayIndexSum(array3);
console.log('somma degli indici degli array', arrayResult15);