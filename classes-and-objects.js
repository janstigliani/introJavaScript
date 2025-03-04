
class Human {
    #yob;
    constructor(name, surname, yob, nationality, gender) {
        this.name = name;
        this.surname = surname;
        this.#yob = yob;
        this.nationality = nationality;
        this.gender = gender;
    }

    // getter yob
    get yob(){
        return this.#yob;
    }

    //setter yob
    set yob(value) {
        const now = new Date();
        const year = now.getFullYear();
        if(value>year) {
            console.log("hai inserito una data futura");
        } else if(value < year-150) {
            console.log("non esistono umani così vecchi");
        }else {
            this.#yob = value;
        }
    }

    #getAge() { //con cancelletto si crea una funzione o variabile privata, inaccessibile dall'esterno, che può essere chiamata nella classe, ma non esternamente
        const now = new Date();
        const year = now.getFullYear();
        const age = year - this.yob;
        return age;
    }

    toString() {
        const humanStr = `Nome: ${this.name}
Cognome: ${this.surname}
Età: ${this.#getAge()}`;

        return humanStr;
    }
}

class Student extends Human {
    constructor(name, surname, yob, nationality, gender, marks = []) {
        super(name, surname, yob, nationality, gender);
        this.marks = marks;
    }

    get mean() {   //scrittura equivalente a funzione sotto, calcolo una proprietà a run time e la rende una proprietà accessibile come quelle dichiarate
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

    // calculateMean() {
    //     if (this.marks.length === 0) {
    //         return -1;
    //     } else {
    //         let sumOfMarks = 0;

    //         for (let i = 0; i < this.marks.length; i++) {
    //             const mark = this.marks[i];

    //             sumOfMarks += mark;
    //         }
    //         const mean = sumOfMarks / this.marks.length;
    //         return mean;
    //     }
    // }

    toString() {
        const studentStr =
            `${super.toString()}
Media: ${this.mean}`

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
console.log(student1.yob);

student1.yob = 2050;
console.log(student1.yob);


class Circle {

    static PI = 3.14;

    constructor(r, centerX, centerY) {
        this.r = r;
        this.centerX = centerX;
        this.centerY = centerY;
    }

    get diameter() {
        return this.r*2;
    }

    calculatePerimeter() {
        return 2*this.r*Circle.PI;
    }

    calculateArea() {
        return (this.r ** 2) * Circle.PI;
    }
}

const circle1 = new Circle(10,0,0);

console.log(circle1.diameter);
console.log(circle1.calculatePerimeter());

const circle2 = new Circle(20,0,0);

console.log(circle2.diameter);
console.log(circle2.calculatePerimeter());
console.log(circle2.calculateArea());
console.log(Circle.PI);


/* The class `Math2` contains static methods for performing mathematical operations such as addition,
finding absolute value, and calculating the cube of a number. */
class Math2 { 

    /**
     * The function "sum" takes two parameters and returns their sum.
     * @param {number} n1 - The parameter `n1` is the first number that will be used in the `sum` function.
     * @param {number} n2 - The parameter `n2` is the second number that will be added to `n1` in the `sum`
     * function.
     * @returns {number} The `sum` of `n1` and `n2` is being returned.
     */
    static sum(n1,n2) {
        return n1+n2;
    }

    /**
     * The function `absolute` returns the absolute value of a given number.
     * @param {number} n - The parameter `n` in the `absolute` function represents a number for which we want to
     * calculate the absolute value. The function returns the absolute value of the input number `n`,
     * which is the positive value of `n` regardless of its sign.
     * @returns {number} The absolute value of the input number `n` is being returned.
     */
    static absolute(n) {
        if (n >= 0) {
            return n;
        } else {
            return -(n);
        }
    }

    /**
     * The static cube function returns the cube of a given number.
     * @param {number} n - The parameter `n` represents the length of the side of a cube.
     * @returns {number} The cube of the input number `n` is being returned.
     */
    static cube(n) {
        return n*n*n;
    }
}

console.log(Math2.cube(5));

console.log(Math2.sum(Math2.cube(-5), Math2.cube(Math2.absolute(-3))));


//Polimorfismo
//gatti e cani non potrebbero stare nello stesso array perché di tipo diverso(in un linguaggio tipato), ma derivano da una stessa classe quindi vengono accettati per quello
//quando viene chiamata una funzione sul figlio, se è presente quella stessa funzione sia sull'ancestor che sul figlio, quest'ultima prevale, sovrascrivendo quella del genitore. 

class Animal {

    constructor(name) {
        this.name = name;
    }

    speak() {
        return `?` ;
    }

    sayName() {
        return `Hi, my name is ${this.name}`;
    }
}

class Dog extends Animal {
    constructor(name, race) {
        super(name);
        this.race = race;
    }

    speak() {
        return "bau";
    }
}

class Cat extends Animal {
    constructor(name, race) {
        super(name);
        this.race = race;
    }

    speak() {
        return "miao";
    }
}

const cat1 = new Cat("Laura", "siamese");
const cat2 = new Cat("Lorenzo", "persiano");
const dog1 = new Dog("Giovanni", "cocker");
const dog2 = new Dog("Jan", "cavalier king");
const cat3 = new Cat("hugo", "persiano");
const cat4 = new Cat("eusebio", "unknown");
const cat5 = new Cat("jeremias", "unknown");

const animals = [cat1, cat2, dog1, dog2, cat3, cat4, cat5];

for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    console.log(animal.sayName(), " ", animal.speak());
    
}