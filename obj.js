//Oggetti -> struttura dati key, value, sono dei dizianari

const emptyObj = {};

//contengono elemeti di tipologie diverse

const student = {
    name: "Mario", //la key è il primo valore e compare come una stringa, ma senza virgolette
    surname: "Mastrogiacomo",
    yOB: 2004,
    marks: [9, 10, 8],
    address: {
        street: "Via Pandolfi",
        streetNumber: 13,
        cap: 22873
    },
    isMarried: false,
    marksMean: function () {
        const sum = 0;
        for (let I = 0; I < student.marks.length; I++) {
            const element = marks[I];
            sum = sum + ElementInt;
        }
        const mean = sum / student.marks.length
        return mean
    }
}

console.log(student);

console.log(student.isMarried);
console.log(student["marks"]);
console.log(student.marks[0]);
console.log(student.address.cap);

let startingObj = {};

console.log(startingObj);

startingObj.name = "Starting Object";
startingObj.today = "21.12.02";

const book1 = {
    title: "Eloquent Javascript",
    author: "tizio straniero",
    edition: 4,
    yOp: 2024,
    isAvailable: true
}

for (const key in book1) {
    if (Object.prototype.hasOwnProperty.call(book1, key)) {
        const value = book1[key];
        console.log(`il valore associato alla chiave ${key} è ${value}`)
    }
}

// si possono fare array con oggetti simili
// scrivendo Object con la prima lettera maiuscola, seguita dal punto, posso accedere a tutte le funzioni per manipolare gli oggetti.

const arrayOfKeys = Object.keys(book1);
console.log(arrayOfKeys);

//versione accorciata di:
// for (let I = 0; I < Object.keys(book1).length; I++) {
//     const key = Object.keys(book1)[I];
//     const value = book1[key];
//     console-log(`il valore associato alla chiave ${key} è ${value}`);    
// }

const arrayOfValues = Object.values(book1); //restituisce tutti i valori
console.log(arrayOfValues);

const arrayOfEntries = Object.entries(book1); //trasforma oggetto in array di array
console.log(arrayOfEntries);

// const number1 = 0
// number1 = 12 //questo è un errore perché number1 è una costante

// book1 = {
//     title: "Odissea",
//     author: "Omero",
//     edition: 112000,
//     yOp: 2023,
//     isAvailable: false
// }

// Object.freeze(book1); // aggiungere freeze blocca le modifiche
// book1.title = "odissea"; //posso cambiare singolarmente i parametri di book nonostante sia una costante, a causa del discorso della memoria, costante è l'indirizzo della memoria dell'oggetto, non il suo contenuto nell'heap
// book1.author= "Omero";
// book1.edition= 112000;
// book1.yOp= 2023;
// book1.isAvailable= false;
// console.log(book1);

// const book2 = book1; /7esempio di cosa tremenda, fare così, si assegna un indirizzo di memoria all'oggetto, e se si modifica l'oggetto, di conseguenza cambia ciò che è all'interno della memoria

// book2.title = "le porno avventure di Biancaneve";

// console.log(book1);

const student1 = {
    name: "Mario", //la key è il primo valore e compare come una stringa, ma senza virgolette
    surname: "Mastrogiacomo",
    yOB: 2004,
    marks: [9, 10, 8],
    address: {
        street: "Via Pandolfi",
        streetNumber: 13,
        cap: 22873
    },
    isMarried: false
}

console.log(student1);

student1.name = "Andreino";

console.log(student1); //  qui il numero della strada era ancora 12, ma essendo collassato, il log recupera in memoria il dato al momento dell'esplosione del contenitore, quindi non risulta affidabile

// console.table(student1)

console.log("log1", JSON.stringify(student1));

// console.log(student1);

student1.address.streetNumber = 129404754229532;

console.log("log2", JSON.stringify(student1));

//diversi tipi di log

// console.table(student1)

//json = java Script Object Mutation, utilizzato per gestire tutti gli scambi informatici

// posso trasformare gli oggetti in stringhe, copiarla, modificarla e poi riconvertirla in Object.

const studentString = `{"name":"marco","surname":"stronzo","yOB":2004,"marks":[9,10,8],"address":{"street":"Via Pandolfi","streetNumber":13,"cap":22873},"isMarried":false}`

const student2 = JSON.parse(studentString);

console.log(student2);

