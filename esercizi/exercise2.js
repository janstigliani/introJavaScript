// // ESERCIZIO 1 MINIMUM

// //versione normale

// function min(number1 = 0, number2 = number1) {
//     // if(number1<number2){
//     //     return number1;
//     // }
//     // else{
//     //     return number2;
//     // }
//     return number1 < number2 ? number1 : number2;

// }

// console.log(min(0, 10));
// console.log(min(0, -10));

// //versione arrowed

// const min1 = (number1 = 0, number2 = number1) => {
//     if (number1 < number2) {
//         return number1;
//     }
//     else {
//         return number2;
//     }
// }

// console.log(min1(10));
// console.log(min1(0, -10));

// //ESERCIZIO 2 RECOURSION

// //versione normale

// function isEven(num) {
//     num = Math.abs(num); //modulo per rendere i num negativi positivi
//     if (num === 0) {
//         return true;
//     }
//     if (num === 1) {
//         return false;
//     }
//     return isEven(num - 2);
// }

// console.log(isEven(22));
// console.log(isEven(21));
// console.log(isEven(0));
// console.log(isEven(1));

// // versione arrowed

// const isEven1 = (num) => {
//     num = Math.abs(num);
//     if (num === 0) {
//         return true;
//     }
//     if (num === 1) {
//         return false;
//     }
//     return isEven(num - 2);
// }

// console.log(isEven1(-22));
// console.log(isEven1(21));
// console.log(isEven1(0));
// console.log(isEven1(-1));

// //ESERCIZIO 3 Bs E COUNT-CHARACTERS

// //Versione normale

// function countBs(word) {

//     let counterBs = 0
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === "B") {
//             counterBs++
//         }

//     }
//     return counterBs;
// }

// // console.log(countBs("Bob"));
// // console.log(countBs("BoB"));

// //Versione arrowed

// const countBs1 = (word) => {
//     let counterBs = 0
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === "B") {
//             counterBs++
//         }

//     }
//     return counterBs;
// }

// // console.log(countBs1("Bob"));
// // console.log(countBs1("BoB"));

// //Versione conta-tu normale

// function countChar(word = "", char = "") {

//     let counterChar = 0
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === char) {
//             counterChar++
//         }

//     }
//     return counterChar;
// }

// console.log(countChar("Elettronica", "e"));
// console.log(countChar("mamma", "m"));
// console.log(countChar("kappa", 1));

// //Versione conta-tu arrowed

// const countChar1 = (word = "", char = "") => {
//     let counterChar = 0
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === char) {
//             counterChar++
//         }

//     }
//     return counterChar;
// }

// console.log(countChar1("Elettronica", "e"));
// console.log(countChar1("mamma", "m"));
// console.log(countChar1("kappa", 1));


// //ESERCIZIO 1 CODE-WARS (REPLACE VOWELS)


// function replace(s) {
//     let modS = "";
//     for (i = 0; i < s.length; i++) {

//         let character = s.charAt(i);
//         if (character === "a" || character === "A" || character === "e" || character === "E" || character === "i" || character === "I" || character === "o" || character === "O" || character === "u" || character === "U") {
//             character = "!";
//         }
//         modS += character;
//     }
//     return modS;
// }

// replace("Hi, I'm Jan!");

// //ESERCIZIO 2 CODE-WARS (WIDE-MOUTH FROG)

// function mouthSize(animal) {
//     animal = animal.toLowerCase()
//     if (animal !== "alligator") {
//         return "wide";
//     }
//     return "small"
// }

// // Versione migliore

// // function mouthSize(animal) {
// //     return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
// //   }

// // Versione code golf (arrowed)

// // const mouthSize = (animal) => animal.toLowerCase() == "alligator" ? "small" : "wide";

// //ESERCIZIO 3 CODE-WARS (SQUARE-SUM)

// numbers = "21, 12, 2000"
// number1 = parseInt(numbers)

// console.log(numbers)

// //ESERCIZIO 4 CODE-WARS (bool to yes/no)

// const boolToWord = bool => bool === true ? 'Yes' : 'No';

// //ESERCIZIO 5 CODE-WARS (even*8/odd*9)

// const simpleMultiplication = number => number % 2 === 0 ? number * 8 : number * 9;

// //ESERCIZIO 6 CODE-WARS (Personalized Message)

// const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest';

// //ESERCIZIO 7 CODE-WARS (Square Every Digit)

// function squareDigits(numbers) {
//     let numberToString = numbers.toString();
//     let sqrtNumberString = ""
//     for (i = 0; i < numberToString.length; i++) {
//         number = parseInt(numberToString[i]);
//         let sqrtNum = number * number;
//         sqrtNumberString += sqrtNum.toString();
//     }
//     return parseInt(sqrtNumberString);
// }


// console.log(squareDigits(22354));


// //ESERCIZIO 8 CODE-WARS (ARRAY AREA,VOLUME)

// function getSize(width, height, depth) {

//     let newArray = []

//     const area = ((2 * width * height) + (2 * depth * height) + (2 * width * depth));
//     const volume = height * width * depth;

//     newArray.push(area, volume);

//     return newArray;
// }

// //ESERCIZIO 9 CODE-WARS (Name Array Capping)

// function capMe(namesArray) {
//     const capitalizedLetterArray = []

//     for (const name of namesArray) {
//         const newName = name[0].toUpperCase() + name.slice(1).toLowerCase();
//         capitalizedLetterArray.push(newName);
//     }
//     return capitalizedLetterArray;
// }

// //ESERCIZIO 10 CODE-WARS (How Green Is My Valley?)

// //left wing decreasing
// //right wing increasing
// //l-r(int sx - int dx) minore possibile

// //trovo il min, e lo inizializzo in un array vuoto.
// //se array part è pari, arrayMin farà parte della right wing; altrimenti sarà un array di un elemento
// //prendo il num più piccolo e lo metto alla 0 di un nuovo array (left wing)
// //prendo il num più grande e lo metto alla 0 di un nuovo array (left wing)
// //prendo il secondo num più grande e lo metto nell'array a sx infondo

// function makeValley(arrayOfInt) {

//     const leftWing = [];
//     const rightWing = [];
//     const bottom = [];
//     let copyArray = [];

//     copyArray = arrayOfInt.sort((a, b) => b - a)
//     bottom.push(copyArray.pop());

//     for (let i = 0; i < copyArray.length; i++) {
//         const number = copyArray[i];
//         if (i % 2 === 0) {
//             leftWing.push(number)
//         }
//         if (i % 2 !== 0) {
//             rightWing.push(number)
//         }
//     }
//     return leftWing.concat(bottom.concat(rightWing.reverse()));
// }

// const roba = makeValley([]);
// console.log(roba);

// //ESERCIZIO 11 CODE-WARS (Find twins)

// function elimination(arr) {
//     for (i = 0; i < arr.length; i++) {
//         const int1 = arr[i]
//         for (j = i+1; j < arr.length; j++) {
//             const int2 = arr[j]
//             if (int1 === int2) {
//                 return int1;
//             }
//         }
//     }
//     return null;
// }

//ESERCIZIO 12 CODE-WARS (New season, new league)

function premierLeagueStandings(teamStandings) {
    let newStandings = {};
    
    const firstPlaceTeam =  teamStandings["1"];
    newStandings["1"] = firstPlaceTeam;
    delete teamStandings["1"];
    const teams = Object.values(teamStandings);
    sortedTeams = teams.sort();
    for (let i = 0; i < sortedTeams.length; i++) {
      newStandings[i+2] = sortedTeams[i];
    }
    return newStandings;
  }

  console.log(premierLeagueStandings({"1": "Liverpool", "2": "Manchester City", "3": "Leicester City"}));