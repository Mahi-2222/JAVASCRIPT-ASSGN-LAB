/*
Name : MAHI PAL
Roll No : BCS2025377
Assignment No : 7
Task No : 2
*/

class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    summary() {
        return this.title + " has " + this.pages + " pages";
    }
}

let book = new Book("Algorithms", 320);

console.log(book.summary());