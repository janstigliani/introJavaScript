// 1) create un oggetto studente per ogni partecipante del corso
//l'oggetto dovrà avere le seguenti keys: name, surname, gender, marks, yoB, nationality
//mettete tutti gli oggeti dentro un array.

const student1 = {
    name: "Lorenzo",
    surname: "Puppo",
    gender: "Male",
    marks: [7, 10, 7],
    yob: 1995,
    nationality: "Italy"
};

const student2 = {
    name: "Jan",
    surname: "Stigliani",
    gender: "Male",
    marks: [8, 9, 7],
    yob: 2000,
    nationality: "Italy"
};

const student3 = {
    name: "Hugo Alexander",
    surname: "Martinez Rivas",
    gender: "Female",
    marks: [9, 9, 10],
    yob: 1994,
    nationality: "El Salvador"
};

const student4 = {
    name: "Jeremias Emmanuele",
    surname: "Cedeno Giler",
    gender: "Male",
    marks: [8, 9, 10],
    yob: 2003,
    nationality: "Ecuador"
};

const student5 = {
    name: "Giovanni",
    surname: "Sussarellu",
    gender: "Male",
    marks: [8, 9, 7],
    yob: 1981,
    nationality: "Italy"
};

const student6 = {
    name: "Laura",
    surname: "Mazza",
    gender: "Female",
    marks: [8, 6, 7],
    yob: 1984,
    nationality: "Italy"
};

const student7 = {
    name: "Eusebio",
    surname: "Veizi",
    gender: "Peanut",
    marks: [6, 6, 7],
    yob: 1993,
    nationality: "Albany"
};

const student8 = {
    name: "Sara",
    surname: "De Prà",
    gender: "Fluid",
    marks: [8, 9, 10],
    yob: 1989,
    nationality: "Italy"
};

const students = [student1, student2, student3, student4, student5, student6, student7, student8];

// 2) scrivete una funzione che restituisca l'età media degli studenti

function averageAge(studentsObj) {
    const currentYear = 2025;
    let totalAge = 0;
    // Calcola l'età di ogni studente e somma le età
    for (let i = 0; i < studentsObj.length; i++) {
        const student = studentsObj[i];
        const age = currentYear - student.yob;
        totalAge += age;
    }
    // Calcola la media delle età
    const averageAge = totalAge / students.length;
    // Arrotonda la media a due decimali
    return Math.round(averageAge);
}
const averageAgeValue = averageAge(students);
console.log("The course average age is", averageAgeValue);

// 3) scrivete una funzione che restituisca un array di stringhe
// ogni stringa dovrà avere questo formato `nome/cognome`

function nameSurnameString(studentsArray) {
    let nameSurnameArray = [];

    for (let i = 0; i < studentsArray.length; i++) {
        const student = studentsArray[i];
        const name = student.name;
        const surname = student.surname;
        let nameSurname = name + `//` + surname;
        nameSurnameArray.push(nameSurname);
    }

    return nameSurnameArray;
}
const studentNameSurname = nameSurnameString(students);
console.log("Students name and surname", studentNameSurname);

// 4) scrivete una funzione che restituisca la somma dei maschi, delle femmine e degli altri generi

function genereArray(studentsArray){
    const genereArray = [];

    for (let i = 0; i < studentsArray.length; i++) {
        const student = studentsArray[i];
        const genere = student.gender;
        genereArray.push(genere);
    }
    return genereArray
}

function genereCounter(studentsArray){
    let genereSumArray = [];
    let maleSum= 0;
    let femaleSum= 0;
    let otherGenereSum = 0;

    for (let i = 0; i < studentsArray.length; i++) {
        const genere = studentsArray[i].toLowerCase();
        if (genere === "male") {
            maleSum ++;
        } else if (genere === "female"){
            femaleSum ++;
        } else {
            otherGenereSum ++;
        }
    }

    genereSumArray.push(`There are ${maleSum} males`,`There are ${femaleSum} females`,`${otherGenereSum} doesn't identify neither as male or female`);
    return genereSumArray;
}

const studentGenere = genereCounter(genereArray(students));
console.log("Gender distrubution in the course",studentGenere);

// 5) scrivete una funzione che restituisca la media della media degli studenti

function courseAverage(studentsObj) {
    let averageCourseMarks= 0;

    for (let i = 0; i < studentsObj.length; i++) {
        const student = studentsObj[i];
        const marksArray = student.marks;
        let marksSum = 0;
        for (const mark of marksArray) {
            marksSum += mark;
        }
        const averageMark = Math.round(marksSum/marksArray.length);
        averageCourseMarks += averageMark;
        }

        averageCourseMarks = averageCourseMarks/studentsObj.length;
        return averageCourseMarks;
}

const courseAverageMarks = courseAverage(students);
console.log("the course average mark is",courseAverageMarks);

// 6) scrivete una funzione che restituisca un oggetto cosi strutturato
// {nationality1:[student1Name, student2Name...], nationality2:[student1Name, student2Name...]....}

//togliere da students gli obj
//accedere ai singoli studenti ed estrarne la nazionalità
//creare un nuovo obj con dentro le varie nazionalità come obj
//popolare gli obj con array con i nomi corrispondenti agli studenti di quella nazionalità

function nationalityObj(studentsArray) {
    let nationalityObj = {};

    for (let i = 0; i < studentsArray.length; i++) {
        const student = studentsArray[i];
        const nationality = student.nationality;
        const name = student.name;

        // If the nationality is not already a key in the object, add it with an empty array
        if (!nationalityObj[nationality]) {  //con le parentesi quadre si accede alle key dell'obj, ed è possibile passargli come parametro anche una variabile
            nationalityObj[nationality] = [];  // con il obj.key non è invece possibile passare una variabile
        }

        // Push the student's name to the array for that nationality
        nationalityObj[nationality].push(name);
    }

    return nationalityObj;
}

console.log(nationalityObj(students));



// 7) primi due esercizi eloquent javascript: The sum of a range; Reversing an array

// 8) https://jessbayer.com/


