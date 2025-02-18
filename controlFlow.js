// console.log(console.log("ciao"))
// prompt ("come ti chiami?");
// console.log(prompt("come ti chiami?"));

// const userName = prompt("What's your name?");
// console.log(userName + " sei un pirla");

// alert(userName+" ciao"); //come prompt crea una finestra di dialogo

//control flow if

// const userAgeString = prompt("quanti anni hai?"); //parseInt converte la stringa in intero senza forzarla tramite operatore di confronto

// if(parseInt(userAge)<=18){
//     alert("non puoi accedere su questo sito, sei troppo piccolo")
// }
// else{
//     alert("benvenuto sul sito di mamme vogliose")
// }

// const userAgeInt = parseInt(userAgeString);

// if(userAgeInt>=18 && userAgeInt<80){
//     alert("benvenuto sul sito di mamme vogliose");
// }
// else if(userAgeInt<18){
//     alert("non puoi accedere su questo sito, sei troppo piccolo");
// }
// else{
//     alert("rischi un infarto, torna a dormire");
// }

//cicli

//while

// let i = 0;
// while (i<11) { //quando la condizione diventa falsa, il ciclo smette
//     console.log(i);
//     // i = i+1;
//     i++; //equivalente, i si incrementa di 1 ogni ciclo
// }
// console.log("fine ciclo while")

// let j = 0;
// while (j<11) { //quando la condizione diventa falsa, il ciclo smette
//     console.log(j);
//     // j = j+2;
//     j += 2;
// }

// console.log("fine ciclo while")

// let k = 22;
// while (k>11) { //quando la condizione diventa falsa, il ciclo smette
//     console.log(k);
//     // j = j+2;
//     k -= 2;
// }

// console.log("fine ciclo while")

// let i = 0;
// while (i<11) { //quando la condizione diventa falsa, il ciclo smette
//     const square = i**2;
//     console.log(square);
//     i++;
// }

// const secretNumber= Math.round(Math.random() * 10)
// while (true) {
//     const guessedString =  prompt("Indovina il numero a cui sto pensand (da 0 a 10)");
//     guessedNumber= parseInt(guessedString);
//     if (guessedNumber===secretNumber) {
//         alert("Indovinato");
//         break;
//     }
//     else{
//         alert("prova di nuovo");
//     }
// }

let startString = "";
while (startString.length <= 9) {
    startString += "*";
}

console.log(startString)

//do while

const pippo = 10;
const pluto = 20;
while (pippo > pluto) {
    console.log("sono entrato");
}

do {
    console.log("sono entrato nel dowhile")
} while (pippo > pluto);

//ciclo for

for (let i = 0; i < 10; i++) {
    console.log("sono nel ciclo for e faccio il giro n° " + i)
}

let startingString = ""
for (; ;) { /// ciclo infinito
    startingString += "s";
    if (startingString.length === 10) {
        break;
    }
}

console.log(startingString);

// for (let y = 0; y < 4; y++) {
//     for (let x = 0; x <4; x++) {    //si deve prima esaurire il ciclo interno per poi poter far ripartire il ciclo esterno

//         console.log(`x: ${x}, y: ${y}`);
//     }

// }

for (let y = 0; y < 4; y++) {
    let row = ``;
    for (let x = 0; x < 4; x++) {    //si deve prima esaurire il ciclo interno per poi poter far ripartire il ciclo esterno
        row += `x: ${x}, y: ${y} `;
    }
    console.log(row);
}

//switch x scelte multiple molto lunghe, in sostituzione di if con tanti if else


const ageString = prompt("in che anno sei nato");


switch (ageString) {
    case "1978": //funziona come un if, o if else

        alert("sei nato nel mio stesso anno")

        break;

    case "1990":

        alert("sei nato nell'anno dei mondiali in italia")

        break;

    case "2000":

        alert("hai 25 anni")

        break;

    default: //funziona come l'else

        alert("che anno demmerda")

        break;
}

