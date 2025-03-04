//ESERCIZIO PIRAMIDE

//con for

// let piramide = "";
// for (let i = 0; i < 7; i++) {
//     piramide += "#";
//     console.log(piramide);
// }

//con while e lenght

// let startingString = "";
// while(startingString.length < 7){
//     startingString += "#";
//     console.log(startingString);
// }

//versione code golf
// for (let i = "#"; i.length < 7; i += "#") {
//     console.log(i);
// }

//versione repeat
// for (let i = 1; i <= 7; i++) {
//     console.log("#".repeat(i));
    
// }

//fatto con jan, con prompt

// let piramide = "";
// let altezza = parseInt(prompt("quanto righe vuoi nella piramide"));
// if(altezza > 0) {
//     for (let i = 0; i < altezza; i++) {
//         piramide += "#";
//         console.log(piramide);
//     }
//     console.log("sta piramide è alta " + altezza + " righe");
// }
// else{
//     alert("devi inserire un numero, e maggiore di 0 possibilmente, ignorante...");
// }

//NaN non puoi compararlo, pero c'è la funzione isNaN()

//ESERCIZIO FIZZBUZZ NORMALE

// for (let i = 1; i <= 100; i++) {
//     if(i % 5 === 0 && i % 3 === 0){
//         console.log("FizzBuzz");
//     }
//     else if(i % 5 === 0){
//         console.log("Buzz");
//     }
//     else if(i % 3 === 0){
//         console.log("Fizz");
//     }
//     else{
//         console.log(i);
//     }
// }

//ESERCIZIO FIZZBUZZ STRINGA

// for (let i = 1; i <= 100; i++) {
//     let string = '';
//     if(i % 3 === 0){
//         string += "Fizz";
//     }
//     if(i % 5 === 0){
//         string += "Buzz";
//     }
//     if(string === ""){
//         string += i;
//     }
//     console.log(string);
// }

//CROCE CODEWARS, ce la siamo sudata

// const max = parseInt(prompt("inserisci larghezza croce \(dispari e maggiore di 2\)"));

// if (max % 2 == 0) {
//     alert("non hai inserito un numero dispari");
// }
// else if (max < 3) {
//     alert("troppo piccolo!");
// }
// else if (isNaN(max)) {
//     alert("inserisci un numero... mongolo");
// }
// else {

//     for (let y = 0; y < max; y++) {
//         let rowString = ``;
//         for (let x = 0; x < max; x++) {
//             if (x === Math.floor(max / 2) && x === y) {
//                 rowString += "x";
//                 break;
//             }
//             else if (x === y || x + 1 === max - y) {
//                 rowString += "x";
//             }
//             else {
//                 rowString += " ";
//             }
//         }
//         console.log(rowString);
//     }
// }

//SCACCHIERA con max/2 senza Boolean con while(true) e prompt

// while (true) {
//     let max = parseInt(prompt("inserisci la dimensione della scacchiera!"));
//     let scacchiera = "";
//     if (isNaN(max)) {
//         alert("sei babbo");
//     } else {
//         for (let y = 1; y < max + 1; y++) {
//             for (let x = 0; x < max / 2; x++) {
//                 if (y % 2 === 0) {
//                     scacchiera += "# ";
//                 }
//                 else {
//                     scacchiera += " #";
//                 }
//             }
//             scacchiera += "\n";
//         }
//         console.log(scacchiera);
//         break;
//     }
// }

//SCACCHIERA versione semplice con un solo for, non scalabile
// let max = 8;
// let scacchiera = "";
// for (let y = 0; y < max; y++) {
// if (y % 2 === 0) {
//     scacchiera += " # # # #\n";
// }
// else {
//     scacchiera += "# # # # \n";
// }
// }
// console.log(scacchiera);

//SCACCHIERA senza max/2 con Boolean

// let max = 8;
// let scacchiera = "";
// for (let y = 1; y < max+1; y++) {
//     let vf = true;
//     for (let x = 0; x < max; x++) {
//         if(y % 2 === 0){
//             if(vf){
//                 scacchiera += "#";
//                 vf = false;
//             }
//             else{
//                 scacchiera += " "
//                 vf = true;
//             }
//         }
//         else{
//             if(vf){
//                 scacchiera += " ";
//                 vf = false;
//             }
//             else{
//                 scacchiera += "#"
//                 vf = true;
//             }
//         }
//     }
//     scacchiera += "\n";
// }
// console.log(scacchiera);

//SCACCHIERA intelligente

// let size = 5;
// let stringResult = "";
// for (let row = 0; row < size; row++) {
//     let newRow = "";
//     for (let column = 0; column < size; column++) {

//         //la somma di righe e colonne da sempre lo stesso risultato in base a se è pari o dispari
        
//         if ((row + column) % 2 === 0) {
//             newRow += " ";
//         } else {
//             newRow += "#";
//         }
//     }    
//     stringResult += newRow + "\n";
// }    console.log(stringResult);




// ESERCIZI PER CASA

// 1 - usando un ciclo crea una piramide come quella del primo 
// esercizio del libro utilizzando solo UN console.log

// for (let i = "#"; i.length < 7; i += "#" + "/n") {
// }
// console.log(i);

// 2 - usando un ciclo crea una piramide come quella del primo 
// esercizio del libro ma capovolta

// for (let i = 7; i > 0; i--) {
//     let piramideString = "";
//     for (let y = 0; y < i; y++) {
//         piramideString += "#";
//     }
//     console.log(piramideString);
// }

// 3 - usando un ciclo crea una piramide come quella dell'esempio:
//     #
//    ###
//   #####
//  #######
// #########

// for (let y = 0; y < 5; y++) {
//     let row = ""
//     for (let x = 9; x <= y; x++) {
//         if (y%2 === 0) {
//             row += "#"
//         }else{
//             row += " "
//         }
//     }
//     console.log(row);
// }

// for (let i = 0; i < 5; i++) { //i rappresenta il numero di righe
//     let Row = "";
//     for (let x = 0; x < 4-i; x++) { //stampa gli spazi prima centro
//         Row += " ";                 //il numero massimo della x rappresenta il numero di spazi prima di #
//     }
//     for (let y = 0; y < i+1; y++) { //stampa # fino al centro (compreso)
//         Row += "#";                 //ne stampa sempre almeno 1
//     }
//     for (let t = 0; t < i; t++) { //stampa # dopo il centro, gli spazi sono inutili
//         Row += "#";
//     }
//     console.log(Row)
// }+

//soluzione più efficiente CoPilot

// for (let i = 0; i < 5; i++) { // i represents the number of rows
//     let row = "";
//     for (let j = 0; j < 9; j++) { // j represents the total width of the row
//         if (j < 4 - i || j > 4 + i) {
//             row += " "; // add spaces before and after the center
//         } else {
//             row += "#"; // add hashes in the center
//         }
//     }
//     console.log(row);
// }

//soluzione code-golf

for (let i = 0; i < 5; i++) { 
    let row = "";
    for (let j = 0; j < 9; j++) { 
        row += j < 4 - i || j > 4 + i ? " " :  "#";
    }
    console.log(row);
}

// 4 - usando un ciclo logga i numeri da 100 a -100

// for (let i = 100; i >= -100; i--) {
//     console.log(i);
// }

// 5 - usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai multipli di 7

// for (let i = 1; i < 101; i++) {
//     if(i % 7 === 0){
//         console.log(`${i}*`);
//     }
//     else{
//         console.log(i);
//     }
// }

// 6 - usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti

// for (let i = 1; i < 101; i++) {
//     if(i % Math.sqrt(i) === 0){
//         console.log(`${i}*`);
//     }
//     else{
//         console.log(i);
//     }
// }

// 7 - chiedi all'utente un numero (positivo) di partenza e poi logga tutti i numeri dal numero dato fino a 0

//con ciclo for

// for (let numberString = parseInt(prompt("inserisci un numero positivo")); numberString >= 0; numberString--) {
//     console.log(numberString);
// }

//con ciclo while

// let numberString = parseInt(prompt("inserisci un numero positivo"));
// while (numberString >= 0) {
//     console.log(numberString);
//     numberString--;
// }

// 8 - chiedi all'utente un numero (qualsiasi) di partenza e poi logga tutti i numeri dal numero dato fino a 100

// let numberString = parseInt(prompt("inserisci un numero"));
// if (numberString>100) {
//     while (numberString >= 100) {
//         console.log(numberString);
//         numberString--;
//     }
// } else{
//     while (numberString <= 100) {
//         console.log(numberString);
//         numberString++;
//     }
// }

// 9 - chiedi all'utente due numeri e logga tutti i numeri pari compresi tra i numeri forniti dall'utente

// let x = parseInt(prompt("Inserisci un numero"));
// let y = parseInt(prompt("Inserisci un altro numero"));
// if(x<y){
//     while (x<=y) {
//         if (x % 2 === 0){
//             console.log(x);
//             x ++;
//         } else{
//             x ++;
//         }
//     }
// }
// else{
//     while (y<=x) {
//         if (y % 2 === 0){
//             console.log(y);
//             y ++;
//         } else{
//             y ++;
//         }
//     }
// }

// 10 - chiedi all'utente quanti anni ha e il suo genere e digli quante ore ha gia' vissuto e quante ore gli rimangono da vivere

// let age = parseInt(prompt("Quanti anni hai?"));
// let gender = (prompt("Inserisci il tuo genere /(M o F)/"));

// if (isNaN(age) || age < 0) {
//     alert("Non hai inserito correttamente la tua età.")
// }
// else {
//     let hoursLived = 8766 * age;
//     console.log(`Hai vissuto per circa ${hoursLived} ore`);
// }

// if (gender === "F" || gender === "f") {
//     let lifeExpectancy = 86;
//     let hoursToLive = 8766 * (lifeExpectancy - age);
//     if(hoursToLive<=0){
//         console.log(`Complimenti! Hai superato l'aspettativa di vita media in Italia`);
//     }else{
//         console.log(`Secondo l'aspettativa media di vita per una donna in Italia ti rimangono circa ${hoursToLive} ore.`);
//     }
   
// } else if (gender === "M" || gender === "m") {
//     let lifeExpectancy = 82;
//     let hoursToLive = 8766 * (lifeExpectancy - age);
//     if(hoursToLive<=0){
//         console.log(`Complimenti! Hai superato l'aspettativa di vita media in Italia`);
//     }else{
//         console.log(`Secondo l'aspettativa media di vita per un uomo in Italia ti rimangono circa ${hoursToLive} ore.`);
//     }
    
// } else {
//     alert("Non hai inserito correttamente il tuo genere.")
// }