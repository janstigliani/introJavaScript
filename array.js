// // const pippo = 12;

// // const array1 = ["ciao", 23, 3.12, true, [], ["mondo"], pippo];  // è possibile farlo ma è molto rischioso, evitare di farlo!!

// // // console.log(array1);

// // const array2 = [];

// // array2.push(4);
// // array2.push(8); 
// // array2.unshift(12); //inserisce l'elemento all'inizio dell'array e non in fondo come push
// // array2.unshift(16);

// // const removed2 = array2.shift() // elimina il primo elemento dell'array e ritorna quell'elemento

// // const removed = array2.pop() // elimina l'ultimo elemento dell'array e ritorna quell'elemento

// // console.log("array2", array2); // può loggare n elementi separati da una virgola

// // console.log("elemento rimosso in fondo", removed);

// // console.log("elemento rimosso in cima", removed2);

// // console.log("get second array element", array2[1]);

// // array2[1] = 27; //accedo alla posizione con le quadre e gli inserisco l'elemento, sostituendolo se ce n'è già uno

// // //se accedo ad un elemento che non ho ancora assegnato, qualche posizione oltre gli indici assegnati, lascia empty block nel mezzo

// // console.log("change array second element", array2);


// // const arrayTest = [123, 12, 45, 34, 1, 2, 45, 34];

// // for (let I = 0; I < arrayTest.length; I++) {
// //     const element = arrayTest[I];
// //     console.log(`l'elemento a indice ${I} è ${element}`);
// // }

// // for (const element of arrayTest) { //fa la stessa cosa, ma senza i e quindi elemento incrementale
// //     console.log(element);
// // }

// // const array4 = [1000, 1001]

// // const array5 = arrayTest.concat(array4); //concatena gli elementi degli altri due array

// // console.log("array5", array5);

// // const array6 = array5.slice(2, 5) //vuoto crea una copia intera, altrimenti crea una copia di una sezione
// // //l'ultimo elemento non è incluso
// // //const array6 = array5.slice(2, -2) //esistono anche i numeri negativi, ovvero a partire dal fondo, deriva da: array5.slice(2, array5.length - 2) 
// // console.log("slice", array6);

// // const array7 = array5.splice(1, 3) //taglia delle parti dell'array iniziale, vuole indice iniziale e numero di elementi da tagliare, se non ha il secondo dato, taglia tutto.

// // console.log("splice", array7, array5);

// // array5.sort();

// // console.log("sort", array5); //ordina in maniera strana, avrà bisogno di un'altra funzione per poter sortare decentemente come vogliamo

// // const index = array5.indexOf(1000);

// // console.log("index", index);

// //METODI DI LAVORO CON ARRAY DI DATI

// //MAPPING (TRASFORMAZIONE DEI DATI)

// arrayMap = [2, 4, 1, 33, 56, 78, 12, 5, 6, 7, 4];

// //non riduce mai il numero degli elementi

// //nuovo array che abbia tutti i dati moltiplicato per due

// function doubleArrayElements(arrayOfNumbers) {
    
//     const arrayMapped = [];

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];
//         const double = element*2
//         arrayMapped.push(double);
//     }
//     return arrayMapped;
// }

// array8 = doubleArrayElements(arrayMap);

// console.log("Array mappato", array8);


// function addOneToArrayElements(arrayOfNumbers) {
    
//     let arrayMapped2 = [];

//     for (let jan = 0; jan < arrayOfNumbers.length; jan++) {
//         let element = arrayOfNumbers[jan];
//         let added = element+1;
//         arrayMapped2.push(added);
//     }
//     return arrayMapped2;
// }

// array9 = addOneToArrayElements(arrayMap);

// console.log("Array mappato2", array9);

// //FILTERING (TROVARE SOLO GLI ARRAY CHE SERVONO)

// //restituisce un'array dello stesso tipo di quello di ingresso, con un numero minore o uguale di elementi

// function removeLargerThan30(arrayOfNumbers) {
    
//     const newArray = [];

//     for (let I = 0; I < arrayOfNumbers.length; I++) {
//         const element = arrayOfNumbers[I];

//         if(element <= 30){ //condizione per determinare quale elemento da tenere va inserito nel nuovo array
//             newArray.push(element);
//         }
        
//     }
//     return newArray
// }


// array10 = removeLargerThan30(arrayMap);

// console.log("array filtrato 1", array10);



// function keepEven(arrayOfNumbers) {
    
//     const newArray = []

//     for (let I = 0; I < arrayOfNumbers.length; I++) {
//         const element = arrayOfNumbers[I];

//         if (element % 2 === 0) {
//             newArray.push(element)
//         }

//     }
//     return newArray;
// }

// array11 = keepEven(arrayMap);

// console.log("array filtrato 2", array11);


// //REDUCING (SOMMATORIA)

// //restituisce il cazzo che vuole!

// function sumAllElements(arrayOfNumbers) {

//     let accumulator = 0; //new qualcosa, del tipo dell'elemento che voglio avere, può essere array, numero o altro.

//     for (let I = 0; I < arrayOfNumbers.length; I++) {
//         const element = arrayOfNumbers[I];

//         accumulator += element;

//     }
//     return accumulator;
// }

// array12 = sumAllElements(arrayMap);

// console.log("array ridotto", arrayMap, array12);


// function multiplyAllElements(arrayOfNumbers) {

//     let accumulator = 1; // in questo caso non può essere 0 perché per la moltiplicazione darebbe sempre 0

//     for (let I = 0; I < arrayOfNumbers.length; I++) {
//         const element = arrayOfNumbers[I];

//         accumulator *= element;

//     }
//     return accumulator;
// }

// array13 = multiplyAllElements(arrayMap);

// console.log("array ridotto", array13);



// function sumAllOddElements(arrayOfNumbers) {

//     let accumulator = 0; 

//     for (let I = 0; I < arrayOfNumbers.length; I++) {
//         const element = arrayOfNumbers[I];
//         if (element % 2 !== 0) {    // insieme di operazione e condizione
//             accumulator += element;
//         }
//     }
//     return accumulator;
// }

// array14 = sumAllOddElements(arrayMap);

// console.log("array ridotto", array14);

// //CONVENIENZA DI CREARE UN NUOVO ELEMENTO PIUTTOSTO CHE MODIFICARE QUELLO DI PARTENZA O UNIRE PIù FUNZIONI PER FARLO

// function sumAllEvenElements(arrayOfNumbers) {
    
//     return sumAllElements(keepEven(arrayOfNumbers));

// } // è meno performante perché richiama più volte

// array15 = sumAllEvenElements(arrayMap);

// //scrittura alternativa array15 = sumAllElements(keepEven(arrayMap));

// console.log("array funzioni concatenate", array15);

// // Ancora esempio di REDUCING

// // function sumEvenAndSumOdd(arrayOfNumbers) {
    
// //     let accumulatorEven = 0;

// //     let accumulatorOdd = 0;

// //     for (let I = 0; I < arrayOfNumbers.length; I++) {
// //         const element = arrayOfNumbers[I];
// //         if (element % 2 === 0) {
// //             accumulatorEven += element;
// //         }else{
// //             accumulatorOdd += element;
// //         }
        
// //     }
// //     return [accumulatorEven, accumulatorOdd]; // ritornando un array possiamo ritornare più valori rispetto al singolo che return si aspetterebbe
// // }

// // array16 = sumEvenAndSumOdd(arrayMap);

// // console.log("array sumEven e sumOdd unica funziona", array16);

// //versione migliorata (deve avere 1 solo accumulator)

// function sumEvenAndSumOdd(arrayOfNumbers) {
    
//     let accumulatorSum = [0, 0];

//     for (let I = 0; I < arrayOfNumbers.length; I++) {
//         const element = arrayOfNumbers[I];
//         if (element % 2 === 0) {
//             accumulatorSum[0] += element;
//         }else{
//             accumulatorSum[1] += element;
//         }
        
//     }
//     return accumulatorSum; 
// }

// array16 = sumEvenAndSumOdd(arrayMap);

// console.log("array sumEven e sumOdd unica funzione", array16);


// // INTERVALLO MEMORIA

// let number1 = 27

// function stupidFunction(number) {
//     number = number*2
// }

// stupidFunction(number1);

// console.log(number1);

// let array1 = [27]

// function stupidFunction2(array) {
//     array[0] *= 2;
// }

// stupidFunction2(array1);

// console.log(array1);

// function lessStupidFunction(array) {
//     const newArray = [];
//     for (let I = 0; I < array.length; I++) {
//         const element = array[I];
//         newArray.push(element); 
//     }
//     newArray[0] *= 2;
//     return newArray;
// }

// lessStupidFunction(array1); //così l'array non viene modificato

// console.log(array1);

//se voglio che array 1 cambi

// array1= lessStupidFunction(array1); 

// console.log(array1); //così sto modificando l'array


// navigazione tra Array multi dimensionali

const array3 = [[1,2,3], [3,2,1,0], [0,0,0,0]];

function navigatiorArray(array) {
    for (let I = 0; I < array.length; I++) {
        const arrayElement = array[I];
        for (let j = 0; j < arrayElement.length; j++) {
            const element = arrayElement[j];
            console.log(`l'elemento ${element} è in posizione ${I}, ${j}`)
        }
    }
}

navigatiorArray(array3);








