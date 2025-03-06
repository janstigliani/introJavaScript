// Esercizio: Sistema di Gestione di una Biblioteca con Programmazione ad Oggetti in JavaScript
// 
// 
// Obiettivo:Creare un sistema di gestione di una biblioteca
// Requisiti:

//     Classi Principali:
//         Book: Rappresenta un libro generico.
//         PhysicalBook: Eredita da Book e rappresenta un libro fisico con una posizione sugli scaffali.
//         EBook: Eredita da Book e rappresenta un libro elettronico con un formato di file.
//         User: Rappresenta un utente della biblioteca.
//         PremiumUser: Eredita da User e rappresenta un utente premium con un limite massimo di libri che può prendere in prestito estendibile.
//         Library: Gestisce i libri e gli utenti della biblioteca.

//     Proprietà e Metodi:
//         Book:
//             Proprietà: title, author, isbn
//             Metodi: toString().
//         PhysicalBook:
//             Proprietà aggiuntiva: shelfLocation.
//         EBook:
//             Proprietà aggiuntiva: fileFormat.
//         User:
//             Proprietà: name, id, borrowedBooks, maxBorrowLimit(statica) = 3
//             Metodi: borrowBook(book), returnBook(book), borrowedBooksNumber(getter).
//         PremiumUser:
//             Metodo aggiuntivo: extendBorrowLimit(newLimit).
//         Library:
//             Proprietà: books, users.
//             Metodi: addBook(book), removeBook(book), isBookAvailable(isbn), addUser(user), removeUser(user), listBooks(), listUsers(), borrowBook(user, book), returnBook(user, book).

//     Funzionalità:
//         Aggiungere e rimuovere libri dalla biblioteca.
//         Aggiungere e rimuovere utenti dalla biblioteca.
//         Gestire il prestito e la restituzione dei libri agli utenti.
//         Visualizzare l'elenco dei libri disponibili e degli utenti registrati.


class Book {
    constructor(title, author, isbn, isAvailable) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = isAvailable;
    }

    toString() {
        const bookString = `Titolo: ${this.title}\nAutore: ${this.author}\nCodice ISBN: ${this.isbn}`;
        return bookString;
    }
}

class PhysicalBook extends Book {
    constructor(title, author, isbn, isAvailable, shelfLocation) {
        super(title, author, isbn, isAvailable);
        this.shelfLocation = shelfLocation;
    }

    toString() {
        return super.toString()+`\nScaffale: ${this.shelfLocation}`;
    }
}

class EBook extends Book {
    constructor(title, author, isbn, isAvailable, fileFormat) {
        super(title, author, isbn, isAvailable);
        this.fileFormat = fileFormat;
    }
    toString() {
        return super.toString()+`\nFormato: ${this.fileFormat}`;
    }
}

class User {

    static MAX_BORROW_LIMIT = 3;

    constructor(name, id, borrowedBooks = []) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = borrowedBooks;
    }

    get borrowedBooksNumber() {
        return this.borrowedBooks.length;
    }

    borrowBook(book) {
        if (this.borrowedBooks.length < User.MAX_BORROW_LIMIT) {
            this.borrowedBooks.push(book.title);
            if (book instanceof PhysicalBook) {
                book.isAvailable = false;
            }
            return this.borrowedBooks;
        } else {
            return 'Numero massimo di libri in prestito raggiunto';
        }
    }

    returnBook(book) {
        if (this.borrowedBooks.includes(book.title)) {
            const index = this.borrowedBooks.indexOf(book.title);
            this.borrowedBooks.splice(index, 1);
            if (book instanceof PhysicalBook) {
                book.isAvailable = true;
            }
            return 'Titolo restituito';
        } else {
            return 'Titolo non presente nella tua libreria';
        }
    }

    toString() {
        const bookString = `Titolo: ${this.name}\nAutore: ${this.id}\nLibri in prestito: ${this.borrowedBooksNumber}`;
        return bookString;
    }
}

class PremiumUser extends User {
    static MAX_BORROW_LIMIT = 3;

    constructor(name, id, borrowedBooks) {
        super(name, id, borrowedBooks);
    }

    extendBorrowLimit(newLimit) {
        User.MAX_BORROW_LIMIT = newLimit;
        return User.MAX_BORROW_LIMIT;
    }
}

class Library {
    constructor(books = [], users = []) {
        this.books = books;
        this.users = users;
    }

    get booksNumber() {
        return this.books.length;
    }

    get usersNumber() {
        return this.users.length;
    }

    addBook(book) {
        this.books.push(book);
        return this.books;
    }

    removeBook(book) {
        const index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
        return this.books;

        //metodo alternativo
        this.books = this.books.filter(bookInLibrary => bookInLibrary.isbn !== book.isbn);
    }

    isBookAvailable(isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        return book ? book.isAvailable : false;
    }

    addUser(user) {
        this.users.push(user);
        return this.users;
    }

    removeUser(user) {
        const index = this.users.indexOf(user);
        if (index !== -1) {
            this.users.splice(index, 1);
        }
        return this.users;
    }

    listBooks() {
        return this.books.map(book => book.toString()).join('\n');
        //this.books.forEach(book => console.log(book))
    }

    listUsers() {
        return this.users.map(user => `${user.name} (ID: ${user.id})`).join('\n');
        // for (const user of users) {
        //     console.log(user.name, user.id)
        // }
    }

    borrowBook(user, book) {
        if (book.isAvailable) {
            user.borrowBook(book);
            return 'Libro prestato';
        } else {
            return 'Libro non disponibile';
        }
    }

    returnBook(user, book) {
        user.returnBook(book);
        return 'Libro restituito';
    }
}

// Example usage:
const libro1 = new PhysicalBook("Titolissimo", "Degno Autore", "1564685231", true, "A1");
const libro2 = new EBook("Titolo indecente", "Uncane Indigno", "15646168591", true, "pdf");
const libro3 = new EBook("Titolo strano", "Uncane", "156469591", true, "pdf");
const libro4 = new PhysicalBook("Titolo spirituale", " Indigno", "156458591", true, "A2");
const libro5 = new EBook("Titolo marcio", "Uncigno", "1564458591", true, "pdf");
const libro6 = new PhysicalBook("Titolo e basta", " elspeth", "1564523491", true, "A3");

const user1 = new User('pippo', 1, ['Titolo meno bello', 'Titolo mediamente interessante']);
const user2 = new PremiumUser('pluto', 2, ['Titolo brutto', 'Titolo orribile']);

const library1 = new Library([libro1, libro2], [user1, user2]);

// console.log(libro1);
// console.log(user1);
// console.log(user1.toString());
// console.log(user1.borrowBook(libro1));
// console.log(user1.returnBook(libro1));
// console.log(user1.returnBook(libro2));
// console.log(user1.borrowedBooksNumber);
// console.log(user2);
// console.log(user2.extendBorrowLimit(5));

// console.log(library1);
// console.log(library1.removeBook(libro2));
// console.log(library1.addBook(libro2));
// console.log(library1.isBookAvailable("1564685231")); 
// console.log(library1.isBookAvailable("15646168591")); 
// console.log(library1.isBookAvailable("0000000000")); 
// console.log(library1.listBooks());
// console.log(library1.listUsers());
// console.log(library1.borrowBook(user1, libro1));
// console.log(library1.returnBook(user1, libro1));
// console.log(library1.borrowBook(user1, libro2));
// console.log(library1.removeUser(user1));
// console.log(library1.addUser(user1));

console.log(library1.borrowBook(user2, libro3));
console.log(library1.borrowBook(user2, libro4));
console.log(library1.borrowBook(user2, libro5));
console.log(library1.borrowBook(user2, libro6));
console.log(user2.borrowedBooks);




