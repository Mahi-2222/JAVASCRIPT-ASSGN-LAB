/*
Name : MAHI PAL
Roll No : BCS2025377
Assignment No : 8
Task No : 1
*/

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hi, I am " + this.name;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}

let teacher = new Teacher("Mahi", "Maths");

console.log(teacher.greet());