
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
        const humanStr = `nome : ${this.name}
cognome : ${this.surname}
eta : ${this.getAge()}
genere : ${this.gender}
nazionalità : ${this.nationality}`;
        return humanStr;
    }
}

class Student extends Human {
    constructor(name, surname, yob, nationality, gender, marks = []) {
        super(name, surname, yob, nationality, gender);
        this.marks = marks;
    }

    addMark(mark) {
        this.marks.push(mark);
    }

    calculateMean() {
        if (this.marks.length === 0) {
            return -1;
        }
        let sumOfMarks = 0;
        for (let i = 0; i < this.marks.length; i++) {
            const mark = this.marks[i];
            sumOfMarks += mark;
        }
        const mean = sumOfMarks / this.marks.length;
        return mean;
    }

    getBestMark() {
        let best = -1;
        for (const mark of this.marks) {
            if (mark > best) {
                best = mark;
            }
        }
        return best;
    }

    toString() {
        let studentStr = `${super.toString()}
media : ${this.calculateMean()}`;
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
}

class Teacher extends Human {
    constructor(name, surname, yob, nationality, gender, subject, students = []) {
        super(name, surname, yob, nationality, gender);
        this.subject = subject;
        this.students = students;
    }

    toString() {
        const teacherStr = `${super.toString()}
materia : ${this.subject}
numero di studenti : ${this.students.length}
media degli studenti : ${this.StudentsMean()}`;
        return teacherStr;
    }

    bestStudent() {
        let bestMean = 0;
        let bestStudent = null;

        for (let i = 0; i < this.students.length; i++) {
            const student = this.students[i];
            const mean = student.calculateMean();
            if (mean > bestMean) {
                bestMean = mean;
                bestStudent = student;
            }
        }
        return bestStudent;
    }

    StudentsMean() {
        let totalMean = 0;

        for (let i = 0; i < this.students.length; i++) {
            const student = this.students[i];
            const mean = student.calculateMean();
            totalMean += mean;
        }
        const meanOfMeans = totalMean / this.students.length;
        return meanOfMeans;
    }
}

class Principal extends Human {
    constructor(name, surname, yob, nationality, gender, teachers = [], school) {
        super(name, surname, yob, nationality, gender);
        this.teachers = teachers;
        this.school = school;
    }

    toString() {
        const principalStr = `${super.toString()}
professori : ${this.teachers.length}
scuola : ${this.school}`;
        return principalStr;
    }

    bestTeacher() {
        let bestTeacher = "";
        let bestMean = 0;

        for (const teacher of this.teachers) {
            const studentMean = teacher.bestStudent().calculateMean();
            if (studentMean > bestMean) {
                bestMean = studentMean;
                bestTeacher = teacher.name + " " + teacher.surname;
            }
        }
        return bestTeacher;
    }

    bestStudent() {
        let bestStudent = "";
        let bestMean = 0;

        for (const teacher of this.teachers) {
            const student = teacher.bestStudent();
            const studentMean = student.calculateMean();
            if (studentMean > bestMean) {
                bestMean = studentMean;
                bestStudent = student.name + " " + student.surname;
            }
        }
        return bestStudent;
    }
}

const student1 = new Student(`laura`, `mazza`, `1984`, `it`, `f`, [7, 8, 9]);
const student2 = new Student(`eusebio`, `veizi`, `1993`, `al`, `m`, [6, 6.5]);
const student3 = new Student(`lorenzo`, `puppo`, `1993`, `it`, `m`, [5, 8, 8]);

const students1 = [student1, student2];
const students2 = [student1, student3];

const teacher1 = new Teacher(`andrea`, `asioli`, `1978`, `it`, `m`, `CS`, students1);
const teacher2 = new Teacher(`andrea`, `evil`, `1987`, `us`, `m`, `CS`, students2);

const teachers = [teacher1, teacher2];

const principal = new Principal(`marcella`, `pettinari`, `1955`, `it`, `f`, teachers, `axia`);

console.log(student1.toString());
console.log(teacher1.bestStudent().toString());
console.log(teacher1.StudentsMean());
console.log(teacher1.toString());
console.log(principal.bestTeacher());
console.log(principal.bestStudent());

//1) aggiungere al toString di tutte le classi gender e nationality
//2) aggiungere a teacher le funzioni: bestStudent e StudentsMean
//3) aggiungere la classe Principal che erediterà da human e come caratteristiche avrà:
// - un array di teachers
// - il nome della scuola
//4) aggiungere al principal due funzioni: bestTeacher e bestStudent


//---------------------------------------------------------


//1)Crea una classe base ContoBancario:
    //-La classe ContoBancario deve avere le seguenti proprietà: titolare (Human) saldo (numero)
    //-La classe ContoBancario deve avere i seguenti metodi:
        //-toString()
        //-deposita(importo): Aggiunge l'importo al saldo.
        //-preleva(importo): Sottrae l'importo dal saldo se ci sono fondi sufficienti, altrimenti stampa un messaggio di errore.

//2)Crea una classe derivata ContoCorrente che eredita da ContoBancario:
    //-La classe ContoCorrente deve avere le seguenti proprietà aggiuntive:
        //-limiteSpesa (numero)
    //-La classe ContoCorrente deve avere i seguenti metodi aggiuntivi:
        //-paga(importo): Sottrae l'importo dal saldo se ci sono fondi sufficienti o se l'importo è entro il limite di spesa, altrimenti stampa un messaggio di errore.
        // se il pagamento va a buon fine il metodo aggiunge al saldo il 2% dell'importo

//3)Crea una classe derivata ContoRisparmio che eredita da ContoBancario:
    //-La classe ContoRisparmio deve avere le seguenti proprietà aggiuntive:
        //-sogliaBonus(numero)
    //-La classe ContoRisparmio deve avere i seguenti metodi aggiuntivi:
        //-applicaBonus(): Aggiunge un bonus del 2% (del saldo) al saldo se il saldo supera la soglia.



class ContoBancario {
    constructor(titolare, saldo) {
        this.titolare = titolare;
        this.saldo = saldo;
    }

    toString() {
        const resocontoStr = `${this.titolare} ${this.saldo}`;
        return resocontoStr;
    }

    deposito(importo) {
        this.saldo += importo;
        return this.saldo;
    }

    prelievo(importo) {
        if (this.saldo > importo) {
            this.saldo -= importo;
            return this.saldo;
        } else { 
            return `Il tuo saldo attuale è insufficiente`;
        }
    }



}

class ContoCorrente extends ContoBancario {
    constructor(titolare, saldo, spesaLimite) {
        super(titolare, saldo);
        this.spesaLimite = spesaLimite;
    }

    paga(importo) {
        if (this.saldo > importo && importo < this.spesaLimite) {
            this.saldo -= importo;
            const cashBack = (importo / 100) * 2;
            this.saldo += cashBack;
            return this.saldo;
        } else if (this.saldo < importo) { 
            return `Il tuo saldo attuale è insufficiente`;
        } else if (importo > this.spesaLimite) {
            return `L'importo supera il massimale di spesa`;
        } else {
            return `ERROR!`;
        }
    }
}

class ContoRisparmio extends ContoBancario {
    constructor(titolare, saldo, sogliaBonus) {
        super(titolare, saldo);
        this.sogliaBonus = sogliaBonus;
    }

    applicaBonus() {
        if (this.saldo > this.sogliaBonus) {
            const bonus = (this.saldo / 100) * 2;
            this.saldo += bonus;
            return this.saldo;
        } else {
            return `Ti mancano ${this.sogliaBonus - this.saldo} soldi per poter applicare il bonus`;
        }
    }
}

const titolare = new Human(`jan`, `stigliani`, `2000`, `it`, `m`);
const contoStigliani = new ContoBancario(titolare, 1500);
const contoCorrenteStigliani = new ContoCorrente(titolare, 1500, 300);
const ContoRisparmioStigliani = new ContoRisparmio(titolare, 1500, 2000);

console.log(contoStigliani);
console.log(contoCorrenteStigliani);
console.log(ContoRisparmioStigliani);
console.log(contoStigliani.toString());
console.log(contoStigliani.deposito(200));
console.log(contoStigliani.prelievo(80));
console.log(contoCorrenteStigliani.paga(50));
console.log(contoCorrenteStigliani.paga(5000));
console.log(contoCorrenteStigliani.paga(400));
console.log(ContoRisparmioStigliani.applicaBonus());
console.log(ContoRisparmioStigliani.deposito(600));
console.log(ContoRisparmioStigliani.applicaBonus());