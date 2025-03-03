
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

        // let best = -1;
        // for (const mark of this.marks) {
        //     if (mark > best)
        //         best = mark;
        // }
        // return best;

        // max = Math.max(...this.marks);
        // return max > 0 ? max : -1;

        // return this.marks.reduce((a,c)=>Math.max(a,c), 0);

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

const student1 = new Student("Laura", "Mazza", 1984, "Ita", "f");
const student2 = new Student("Eusebio", "Veizi", 1993, "Alb", "m", [5, 6, 8]);
const student3 = new Student("Lorenzo", "Puppo", 1995, "Ita", "m")

// console.log(student1 + "");
// console.log(student2.toString());

const students = [student1, student2, student3];

students.sort((student1, s2) => student1.compareTo(s2))

console.log(students.toString());

// const Array = ["m", "s", "pippo"] //per guardare la differenza tra il to string dell'array di default e come viene visualizzato quello con gli studenti creati da noi.
// console.log(Array.toString());

student1.addMark(2);

console.log(student1.toString());

console.log(`Il miglior voto di ${student2.name} è ${student2.getBestMark()}`);

const teacher1 = new Teacher("Andrea", "Asioli", 1978, "ita", "m", "CS", students)

console.log(teacher1.toString());