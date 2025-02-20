// const gridaSchiappa = function() { //la funzione non deve per forza avere un parametro in ingresso
//     console.log("Schiappa!")
// }
// console.log(typeof gridaSchiappa); //restituisce tipo function

// gridaSchiappa()

// const gridaSchiappa2 = function(name) {
//     console.log(`${name} sei una Schiappa!`)
// }

// gridaSchiappa2("pippo"); //permette di non definire name, ma di fornilo di volta in volta alla funzione
// gridaSchiappa2("ciao");
// gridaSchiappa2(2);
// gridaSchiappa2(true); // non essendo typato permette di mettere qualunque tipo di dato

// function gridaSchiappa3(name) {                     // scrittura equivalete a quella sopra, si usa solamente questa
//     console.log(`${name} sei una Schiappa!!!!`);
// }

// gridaSchiappa3("Maria");

// const logDouble = (number) => console.log(number*2);

// logDouble(20);

// console.log(logDouble(15));

// function sum(number1, number2) {
//     if(!number1){   //si può fare un check per controllare se gli elementi non vengo dati
//         number1 = 0
//     }
//     if (!number2){
//         number2 = 0
//     }
//     const sum = number1 + number2;
//     return sum;
// }

// const sumArrow = (n1, n2) => n1 + n2; // se sta su una riga non ha bisogno di return

// const sumArrow2 = (n1=0, n2=0) =>{ //dare dei numeri al parametro li rende dei default da usare nel caso il parametro non venga passato 
//     // se non sta su una riga diventa molto simile alla funzione normale
//     const sum = n1 + n2;
//     return sum;
// } 

// console.log(sum(10, 8));

// const result = sum(13, 12) * 2;

// console.log(result);

// const result2 = sum(11,22,33,44,55); //ignora eventuali parametri in più dati alla funzione

// console.log(result2);

// const result3 = sum(4); // se ne dai di meno, quello non considerato sarà Undefined, e un numero+Undefined da come risultato Nan (not a number)

// const result4 = sumArrow2(4);

// console.log(result3);

//scopes 

// tutto ciò che è contenuto nelle graffe definisce uno scope

// const hello = "ciao"; //lo scope, spazio di vita di questa variabile è tutto il file perché non compreso tra {}, quindi diventa accessibile da tutto il file oltre la riga 68

// function sayHello(name) {
//     const helloString = hello + " " + name + "!"; //lo scope contenuto nelle due graffe può leggere tutto ciò che c'è nel file al di fuori
//     console.log(helloString);
// }

// sayHello("Sara");

// const hello = "ciao"; //lo scope, spazio di vita di questa variabile è tutto il file perché non compreso tra {}, quindi diventa accessibile da tutto il file oltre la riga 68

// function sayHelloTo(name) {
//     function createHelloString(name) {
//         const helloString = hello + " " + name + "!"; //lo scope contenuto nelle due graffe può leggere tutto ciò che c'è nel file al di fuori
//         return helloString;
//     }
//     const newHello = createHelloString(name); // viene runnato prima della sottofunzione
//     console.log(newHello);
// }

// sayHelloTo("Sara");

//lo shadowing permette di creare una variabile con lo stesso nome in uno scope differente, e farla leggere ai suoi figli ecc. che la preferiranno a quella dello scope più lontano.



// console.log(helloString); // da errore, perché la mamma non può accedere al figlio. Può darsi che la variabile non esista al di fuori di questo scope, perciò non è definita.

//Closure

function CreatecallTwice(name) {
    const call = name + `,` + name + `!`;
    const callfunction = () => console.log(call);

    return callfunction; 
}

const callTwice = CreatecallTwice("Andrea");

callTwice();

function createMultiplicator(number) {
    
    const multiplicatorFunction = function(numberToMultiplay){
        return numberToMultiplay * number
    }
    return multiplicatorFunction;
}

const multiplicatorX2 = createMultiplicator(2);  // quando assegni una funzione ad una variabile, gli assegni di fatto il contenuto di quella funzione, e nel caso di una funzione dentro una fuzione, significa assegnare quella funzione e quindi rende possibile passargli il parametro della funzione interna.
const multiplicatorX3 = createMultiplicator(3);

console.log(multiplicatorX2(10));
console.log(multiplicatorX2(13));

console.log(multiplicatorX3(10));
console.log(multiplicatorX3(13));

function createCounter() {
    let counter = 0;
    
    const incrementFunction = function() {
        counter ++ ;
        return counter;
    }

    return incrementFunction; 
}

const increment = createCounter();

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());


//Ricorsione

function fact(number) {
    if(number === 0){
        return 1;
    }
    // else{ //può essere omesso perché il return blocca la funzione
        return number * fact(number-1);
    // }
}
console.log(fact(5));
console.log(fact(6));




