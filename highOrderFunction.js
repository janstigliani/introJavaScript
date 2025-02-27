const testArray = [2,5,7,1,0,100,103];

//// MAP

function add2ToArray(arrayOfNumbers) {
    
    const addedArray = [];

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const number = arrayOfNumbers[i];

        const newNumber = number + 2;

        addedArray.push(newNumber);
    }
    return addedArray;
}

const newArray = add2ToArray(testArray);
console.log(newArray);

function addIndexToArray(arrayOfNumbers) {
    
    const addedArray = [];

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const number = arrayOfNumbers[i];

        const newNumber = number + i;

        addedArray.push(newNumber);
    }
    return addedArray;
}

const newArray2 = addIndexToArray(testArray);
console.log(newArray2);

function map(array, mappingFunction) {
    
    const parkingArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        const newElement = mappingFunction(element, i, array);

        parkingArray.push(newElement);
    }
    return parkingArray;
}

function add2(number) {
    
    const newNumber = number+2;
    return newNumber;

}

// const newArray3 = map(testArray, add2);
const newArray3 = testArray.map(add2);
console.log(newArray3);

function addIndex(number, index) {

    const newNumber = number+index;
    return newNumber;

}

// const newArray4 = map(testArray, addIndex);
const newArray4 = testArray.map(addIndex);
console.log(newArray4);

const testArray2 = ["pippo","pluto","paperino","clarabella","minnie"]

function capitalize(STR) {
    const newString = STR.toUpperCase();
    return newString;
}

// const newArray5 = map(testArray2, capitalize);
const newArray5 = testArray2.map(capitalize);
console.log(newArray5);

//// funzione aumenta di 3 tutti gli elementi dell'array

const newArray6 = testArray.map(number => number + 3);
console.log(newArray6);

//// funzione aumenta di 4 tutti gli elementi dell'array

const add4 = (numb) => numb + 4;        // funzionerebbe così se dovessi scrivere tutta la funzione, ma posso renderla anonima e passargli solo cosa voglio che faccia
const newArray7 = testArray.map(add4);
console.log(newArray7);

//// funzione che ad ogni numero di testArray sottrae il doppio del suo indice

const newArray8 = testArray.map((nbr,i) => nbr-(2*i));
console.log("funzione mapping con due parametri", newArray8);

//// funzione che restitutice un array con le lunghezze delle stringhe di testArray2

const newArray9 = testArray2.map(str => str.length);
console.log("funzione mapping lunghezza stringa",newArray9);

//// funzione che appende a tutte le stringe di testArray2 la parola "banana"

const newArray10 = testArray2.map(str => str + " banana");
console.log("funzione mapping str + banana",newArray10);

//// FILTER

//// funzione che tiene solo i number pari

function keepEven(arrayOfNumbers) {
    
    const parkingArray = [];

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const number = arrayOfNumbers[i];

        if (number % 2 === 0) {
            parkingArray.push(number)
        }
        
    }
    return parkingArray;
}

const newArray11 = keepEven(testArray);
console.log(newArray11);

function filter(array, filteringFunction){
    const parkingArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (filteringFunction(element, i, array)) {
            parkingArray.push(element)
        }
        
    }
    return parkingArray;
}

function isEven(number) {
    if (number % 2 === 0){
        return true;
    } else{
        return false;
    }
}

// const newArray12 = filter(testArray, isEven);
const newArray12= testArray.filter(isEven);
console.log(newArray12);


//// funzione che tiene dentro tutti i numeri minori di 5

const newArray13= testArray.filter(number => number<5);
console.log("filter min5",newArray13);

//// funzione che tiene dentro testArray2 tutte le parole più lughe di 6 caratteri

const newArray14 = testArray2.filter(str => str.length>6);
console.log("filter magg 6",newArray14)

//// funzione che rimuove da testArray2 tutte le stringhe con indice pari

const newArray15 = testArray2.filter((str, index) => index %2 !== 0); 
// const newArray15 = testArray2.filter((_,index) => index % 2 === 1)// si può usare _ al posto di str che è un parametro che devo passare perché è posizionale l'ingresso dei parametri da filter, ma non lo uso, per cui posso segnalare così che è un parametro inutile
console.log(newArray15);

//// REDUCE (Ricorda: può ritornare cose diverse da un array)

function sumAll(arrayOfNumbers) {
    let sum = 0;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const number = arrayOfNumbers[i];
        
        sum += number;
    }
    return sum;
}

const newArray16 = sumAll(testArray);
console.log("sumAll", newArray16);

function reduce(array, reducingFunction, startingAccumulator) {
    
    let accumulator = startingAccumulator;

    for (let i = 0; i < array.length; i++) {
        
        const current = array[i];
        
        accumulator = reducingFunction(accumulator, current, i, array)
    }
    return accumulator;
}

function sum(accumulator, current) {
    const newAccumulator = accumulator + current;
    return newAccumulator;
}

// const sum1 = reduce(testArray,sum,0);
const sum1 = testArray.reduce(sum,0);
console.log("sum",sum1);

//funzione che appende ogni string dell'array in un unica stringa

const stringAppend = testArray2.reduce((a, c) => a+c, "");
console.log("stringAppend",stringAppend);

//moltiplica tra loro tutti i numeri di testArray

const numMolt = testArray.reduce((a,c) => a*c, 1);
console.log("number multiply",numMolt);

// rimuove parola con indice pari, rendi maiuscola la prima lettera delle altre

const stocazzo = testArray2.filter((str, i) => i % 2 === 1)
                           .map(str =>{
                            const firstChar = str[0];
                            const restStr = str.slice(1);
                            const newStr = firstChar.toUpperCase() + restStr;
                            return newStr;
                           })

// const stocazzo1 = testArray2.reduce(a, c, i => {
//     if(i % 2 === 1){
//         const firstChar = c[0];
//         const restStr = c.slice(1);
//         const newStr = firstChar.toUpperCase() + restStr;
//         a.push(newStr)
//         return newStr;
//     }else{
//         return a;
//     }

// }, [])

function isOdd(number) {
    if (number % 2 === 1) {
        return true;
    }else{
        return false;
    }
}

function capitalizeFirstChar(str){
    const firstChar = str[0];
    const restStr = str.slice(1);
    const newStr = firstChar.toUpperCase() + restStr;
    return newStr;
}

const stocazzo3 = testArray2.filter(isOdd)
                            .map(capitalizeFirstChar);

console.log("primo pezzo", stocazzo);
// console.log("primo pezzo", stocazzo1);
console.log("primo pezzo", stocazzo3);

// FIND

function isEven(number) {
    // if (number % 2 === 0){
    //     return true;
    // } else{
    //     return false;
    // }
    return number % 2 === 0;
}

console.log(testArray.filter(isEven));
console.log(testArray.find(isEven));

// SOME (c'è almeno un elemento che soddisfa la condizione?)

console.log(testArray.some(isEven));

// EVERY (tutti soddisfano la condizione?)

console.log(testArray.every(isEven));

// SORT 

function sortingFunctionDecreasing(first, second){
    if (first < second) {
        return 1;
    }else if(first > second){
        return -1;
    }else{
        return 0;
    }
}

function sortingFunctionincreasing(first, second){
    if (first > second) {
        return 1;
    }else if(first < second){
        return -1;
    }else{
        return 0;
    }
}

// testArray.sort(sortingFunctionincreasing);
// console.log(testArray);

// testArray.sort(sortingFunctionDecreasing);
// console.log(testArray);


// testArray.sort((f,s) => f-s);
// console.log(testArray);
// testArray.sort((f,s) => s-f);
// console.log(testArray);

// //dalla a alla z
// testArray2.sort((fStr, sStr) => fStr.localeCompare(sStr))
// console.log(testArray2);

// //dalla z alla a
// testArray2.sort((fStr, sStr) => sStr.localeCompare(fStr))
// console.log(testArray2);


function betterSort(array,sortingFunction){
    const newArray= [...array];
    newArray.sort(sortingFunction);
    return newArray;
}

const sortedArray = betterSort(testArray2, (fStr, sStr) => sStr.localeCompare(fStr));
console.log(testArray2);
console.log(sortedArray)