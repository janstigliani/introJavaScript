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
console.log(newArray13);

//// funzione che 