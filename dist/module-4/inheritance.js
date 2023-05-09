"use strict";
class Person {
    constructor(name, age, address) {
        // 2. initializing parameters
        this.name = name; // 3. assigning parameters to class properties
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `This ${this.name} will sleep for ${hours}`;
    }
}
/*
// this also works like Student class

class Student1 extends Person {}
*/
// inheriting from parent class Person
class Student extends Person {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
// inheriting from parent class Person
class Teacher extends Person {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClasses(classes) {
        return `This ${this.name} will take ${classes} classes`;
    }
}
