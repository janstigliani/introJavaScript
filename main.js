console.log("Hello World");

console.log("Ciao Mondo");

// una funzione è una parola, possibilmente seguita da un punto, e sempre seguita da parentesi tonde.

// typeof

console.log(typeof 16);
console.log(typeof "Hello World");
console.log(typeof false);

// numbers

5 //integer
7,64 //float
3,1e5 //esponenziali, equivalente a 310000

Infinity //è il numero più grande possibile
-Infinity //è il numero più piccolo possibile

NaN //"not a number" ma è comunque un tipo number

console.log(typeof NaN);
console.log(0/0); //da come risultato un NaN

//operazioni

console.log("somma 5+7=", 5+7); //console.log può avere più elementi al suo interno, separati ognuno dalla virgola.
console.log("sottrazione 5-7=", 5-7);
console.log("divisione 5/7=", 5/7);
console.log("moltiplicazione 5*7=", 5*7);
console.log("potenza 2**2=", 2**2);

//modulo
console.log("modulo 5%2", 5%2); //restituisce il resto
console.log("modulo 12%5", 12%5);

//radice quadrata (non presente come operatore)

console.log("radice quadrata 9", Math.sqrt(9));
console.log("arrotondamento 3.5", Math.round(3.5));
console.log("arrotondamento basso 4.7", Math.floor(4.7));
console.log("arrotondamento alto 2.2", Math.ceil(2.2));

//typeof lavora su un solo elemento

//stringhe
`` // backtips alt96 su numbpad

console.log(96, "96"); //n°1 è un numero, n°2 è una stringa
console.log("io sono jan", 'io sono jan');
console.log("l'apostrofo è importante");
console.log("\"l'apostrofo  con le virgolette si fa così\"");
console.log("io sono jan \nnon ne posso più");
console.log(`"l'apostrofo  con le virgolette si fa così
e mantiene pure la formattazione originale"`); //il backtick permette di eseguire codice al suo interno, oltre a permetterci di scrivere senza override e mantenere la formattazione
console.log(`la somma di 4 e 6 è ${4+6}`); //${} per inserire il codice da eseguire

console.log("ciao a tutti"+" spero che stiate bene");

//boolean
console.log("falso", false);
console.log("falso", false);

//not fatto con !
console.log("not falso", !false, "not true", !true);

//and fatto con double e-commerciale, &&
console.log("true and true", true&&true);
console.log("true and false", true&&false);
console.log("false and true", false&&true);
console.log("false and false", false&&false);

//or fatto con double pipe, alt+prima di 1, ||
console.log("true or true", true||true);
console.log("true or false", true||false);
console.log("false or true", false||true);
console.log("false or false", false||false);

//undefined & NULL
console.log(typeof null);
console.log(typeof undefined);

//operatori di confronto

//uguale ===
console.log("uguaglianza 4=4", 4==4); //il doppio uguale non si usa, solo il triplo
console.log("uguaglianza 4=4", 4===4);
console.log("uguaglianza 4=5", 4==5);
console.log("uguaglianza 4=5", 4===5);

console.log("uguaglianza stringa 5 == a numero 5", "5"==5); //ecco perché non si usa
console.log("uguaglianza stringa 5 === a numero 5", "5"===5); 

// diverso !=

console.log("4 diverso 4", 4!=4); //il singolo uguale non si usa, solo il triplo
console.log("4 diverso 4", 4!==4);
console.log("4 diverso 5", 4!=5);
console.log("4 diverso 5", 4!==5);

console.log("stringa 5 diverso (!=) da numero 5", "5"!=5); //ecco perché non si usa
console.log("stringa 5 diverso (!==)da numero 5", "5"!==5);

// </>/>=/<= loro convertono le stringhe

console.log("4 maggior 5", 4>4);
console.log("4 minore uguale 5", 4>=5);

console.log("a è maggiore di b", "a">"b"); //segue l'ordine di unicode
console.log("a è minore di b", "a"<"b");
console.log("a è minore di A", "a"<"A");
console.log("b è minore di A", "b"<"A");

//variabili - var, let, const

let pippo = 5; //permette di cambiare il valore al suo interno, cambiando anche tipo di dato senza problema
console.log(pippo);
console.log("pippo è maggiore di 4", pippo>4);

pippo = "cocain";

console.log(pippo);

const pluto = 12;
console.log(pluto);
console.log("pluto più 4", pluto+4);

// pluto = "cocain"; //errore in console

// console.log(pluto);

// console.log(paperino + 10);
// var paperino = 5; //da come valore NaN, ma non da errore. PROVOCA ERRORI, NON USARE

// topolino = 10;
// console.log(topolino + 10);
// let topolino = 5;

//USA LET NON VAR

let pippo2 = 5 * 5;
console.log(pippo2);

//CamelCase

const numeroDaElevareAPotenza = 6;
const eposnentePotenza = 2;
console.log(numeroDaElevareAPotenza**eposnentePotenza);

//short circuit operator
const qui = 5 || 6; // si usa se si ha il dubbio che un valore sia nullo, valori nulli: stringa vuota, false, 0, null, undefined
console.log(qui);

const quo = false || 6; 
console.log(quo);

const qua = 5 ?? 6; //controlla se è vuoto
console.log(qua);

const qua2 = false ?? 6; 
console.log(qua2);

const qua3 = null ?? 6; 
console.log(qua3);

const mickey = 5 > 4 ? 10 : 20; //si pone una condizione, seguita da punto di domanda, e da due valori, separati da due punti; se la condizione è vera, prende il primo valore, se è falsa, prende il secondo.
console.log(mickey)

const mickey1 = 5 < 4 ? 10 : 20;
console.log(mickey1)












