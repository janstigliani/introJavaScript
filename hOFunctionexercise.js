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

// const minMax = array1.reduce((a, c) => c === Math.min(...array1)|| c === Math.min(...array1), [-Infinity,Infinity]);
// const minMax = array1.filter(num => num >)
// console.log('4.1) minimo e massimo', minMax)

// function isMinMax(a,c) {
//     const newAccumulator= []
//     if (c === Math.min(array1)) {
//         newAccumulator.push(c);
//     } else if(c === Math.min(array1)){
//         newAccumulator.push(c);
//     }
//     return newAccumulator;
// }

// const minMax1 = array1.reduce(isMinMax, []);
// console.log('4.2) minimo e massimo', minMax1);

const findMinMax = array1.reduce(([min, max], curr) => [Math.min(min, curr), Math.max(max, curr)], [Infinity, -Infinity]);


console.log('4.2) minimo e massimo', findMinMax);


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

const firstCharString = array2.reduce((a, c) => a+c[0], "");
console.log('8.1) stringa con prima lettera di ogni parola', firstCharString);

function getFirstChar(a, c) {
    const newA= a+c[0];
    return newA;
}

const firstCharString1 = array2.reduce(getFirstChar, "");
console.log('8.2) stringa con prima lettera di ogni parola', firstCharString1);

//9) somma tutti i caratteri di tutte le stringhe (reduce)

const charSum = array2.reduce((globalAcc, currentName) => globalAcc+ [...currentName].reduce((globalAcc,char) => globalAcc +char, ''));
console.log('9.1) somma caratteri stringhe', charSum);

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


const strNoVowels1 = array2.map(str => str.split('')
                           .filter(char => !["a", "e", "i", "o", "u"].includes(char.toLowerCase())).join('')
);
console.log('10.2) eliminare le vocali dalle stringhe', strNoVowels1);


//11) restituire un array di numeri che sono le lunghezze delle singole parole (map)

const array3 = [[1, 2, 3], [3, 2, 1, 0], [0, 0, 0, 0, 0]];

//12) restituire un array di numeri che sono le lunghezze dei sigoli array (map)

//13) sommare tutti i numeri in tutti gli array (reduce)

//14) sommare tutte le lunghezze degli array (reduce)

//15) sommare tutti i numeri con indice uguale e restituire un array di risultati (reduce)

// const sumofEqualIndex = array3.reduce((a,c,i,original) => {
//     if (i === 0) {
//         a = c.map((num, i) => {
//             let sum = 0
//             original.forEach(array => {
//                 sum += array[i]
//             });
//             return sum;
//         })
//         return a;
//     }else{
//         a = a.reduce((a,c))
//     }
   
// }, [])



// console.log(sumofEqualIndex);

function arrayIndexSum1(arrayOfArray) {
    const parkingArray=[];

    for (let i = 0; i < arrayOfArray.length; i++) {
        const array = arrayOfArray[i];
        for (let j = 0; j < array.length; j++) {
            const number = array[j];
            if(parkingArray[j]){
                parkingArray[j] += number;
            }else{
                parkingArray[j] = number;
            }
            
        }
        
    }
    return parkingArray;
}

console.log(arrayIndexSum1(array3));

const sumallEqualIndex2 = array3.reduce((a, c) => {
    for (let j = 0; j < c.length; j++) {
        const number = c[j];
        if (a[j]) {
            a[j] += number;
        } else {
            a[j] = number;
        }
    }
    return a;
}, []);

console.log(sumallEqualIndex2);

const sumallEqualIndex3 = array3.reduce((a, c) => {
    for (let j = 0; j < c.length; j++) {
        const number = c[j];
        if (a[j]) {
            a[j] += number;
        } else {
            a[j] = number;
        }
    }
    return a;
}, []);

console.log(sumallEqualIndex3);






const lorenzo = {
    name: "Lorenzo",
    surname: "Puppo",
    gender: "Male",
    marks: [7, 10, 7],
    yob: 1995,
    nationality: "Italy"
};

const jan = {
    name: "Jan",
    surname: "Stigliani",
    gender: "Male",
    marks: [8, 9, 7],
    yob: 2000,
    nationality: "Italy"
};

const hugo = {
    name: "Hugo Alexander",
    surname: "Martinez Rivas",
    gender: "Female",
    marks: [9, 9, 10],
    yob: 1994,
    nationality: "El Salvador"
};

const jeremias = {
    name: "Jeremias Emmanuele",
    surname: "Cedeno Giler",
    gender: "Male",
    marks: [8, 9, 10],
    yob: 2003,
    nationality: "Ecuador"
};

const giovanni = {
    name: "Giovanni",
    surname: "Sussarellu",
    gender: "Male",
    marks: [8, 9, 7],
    yob: 1981,
    nationality: "Italy"
};

const laura = {
    name: "Laura",
    surname: "Mazza",
    gender: "Female",
    marks: [8, 6, 7],
    yob: 1984,
    nationality: "Italy"
};

const eusebio = {
    name: "Eusebio",
    surname: "Veizi",
    gender: "Peanut",
    marks: [6, 6, 7],
    yob: 1993,
    nationality: "Albany"
};

const sara = {
    name: "Sara",
    surname: "De Prà",
    gender: "Fluid",
    marks: [8, 9, 10],
    yob: 1989,
    nationality: "Italy"
};

const hugo2 = {
    name: "Hugo Alexander",
    surname: "evil",
    gender: "Female",
    marks: [9, 9, 10],
    yob: 1994,
    nationality: "El Salvador"
};

const laura2 = {
    name: "Laura",
    surname: "Old",
    gender: "Female",
    marks: [8, 6, 7],
    yob: 1920,
    nationality: "Italy"
};

const allStudents = [lorenzo, jan, hugo, jeremias, giovanni, laura, eusebio, sara, hugo2, laura2];

console.log(allStudents);

// function sortByAge(student1,student2) {
//     const yob1 = student1.yob;
//     const yob2 = student2.yob;

//     return yob1-yob2;
// }

// allStudents.sort(sortByAge);

// console.log(allStudents);

function sortByAgeAndSurname(student1,student2) {
    const yob1 = student1.yob;
    const yob2 = student2.yob;
    if (yob1 === yob2) {
        const surname1 = student1.surname;
        const surname2 = student2.surname;

        return surname1.localeCompare(surname2);
    }
    return yob1-yob2;
}

allStudents.sort(sortByAgeAndSurname);

console.log(allStudents);

//1) mettere studenti in ordine per nome, in caso di omonimia usare come ordine aggiuntivo l'età crescente

function sortByNameAndAge(student1, student2) {
    const name1 = student1.name;
    const name2 = student2.name;

    if (name1 === name2) {
        const age1 = student1.yob;
        const age2 = student2.yob;

        return age1 - age2;
    }

    return name1.localeCompare(name2);
}
allStudents.sort(sortByNameAndAge);
console.log(allStudents);


//2) mettere studenti in ordine per media dei voti

function sortByMean(student1, student2) {
    const mean1 = calculateMean(student1.marks);
    const mean2 = calculateMean(student2.marks);

    return mean1 - mean2;
}

function calculateMean(arrayOfNumbers) {
    let sumOfMarks = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const mark = arrayOfNumbers[i];
        sumOfMarks = sumOfMarks + mark;

    }
    const mean = sumOfMarks / arrayOfNumbers.length;
    return mean;
}
allStudents.sort(sortByMean);
console.log(allStudents);