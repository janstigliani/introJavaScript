class Human {

    constructor(name, surname, yob, nationality, gender) {
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.nationality = nationality;
        this.gender = gender;
    }

    getAge() {
        const now = new Date();
        const year = now.getFullYear();
        const age = year - this.yob;
        return age;
    }

    toString() {
        const humanStr = `Nome: ${this.name}
Cognome: ${this.surname}
Età: ${this.getAge()}`;

        return humanStr;
    }
}

class Student extends Human {
    constructor(name, surname, yob, nationality, gender, marks = []) {
        super(name, surname, yob, nationality, gender);
        this.marks = marks;
    }

    calculateMean() {
        if (this.marks.length === 0) {
            return -1;
        } else {
            let sumOfMarks = 0;

            for (let i = 0; i < this.marks.length; i++) {
                const mark = this.marks[i];

                sumOfMarks += mark;
            }
            const mean = sumOfMarks / this.marks.length;
            return mean;
        }
    }

    toString() {
        const studentStr =
            `${super.toString()}
Media: ${this.calculateMean()}`

        return studentStr;
    }

    compareTo(otherStudent) {
        const name1 = this.name;
        const name2 = otherStudent.name;

        if (name1 === name2) {
            const yob1 = this.yob;
            const yob2 = otherStudent.yob;

            return yob1 - yob2;
        }

        return name1.localeCompare(name2);
    }

    addMark(mark) {
        this.marks.push(mark);
    }

    getBestMark() {

        if (this.marks.length < 0) {
            return -1;
        } else {
            return Math.max(...this.marks);
        }
    }
}

class Teacher extends Human {
    constructor(name, surname, yob, nationality, gender, subject, students = []) {
        super(name, surname, yob, nationality, gender);
        this.subject = subject;
        this.students = students;
    }

    toString() {
        const teacherStr = `${super.toString()}
Materia: ${this.subject}
Numero Studenti: ${this.students.length}`

        return teacherStr;
    }
}


//////ESERCIZI 

//1)Aggiungere al toString di tutte le classi gender e nationality

//2)Aggiungere a teacher le funzioni bestStudent e studentsMean

//3)Aggiungere la classe Principal che erediterà da Human e come caratteristiche avrà:
// un array di teachers
// il nome della scuola

//4)Aggiungere al principal due funioni: bestTeacher e bestStudent