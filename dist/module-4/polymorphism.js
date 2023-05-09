"use strict";
class Person1 {
    takeNap() {
        console.log("I am sleeping 8 hours per day");
    }
}
class Student1 extends Person1 {
    takeNap() {
        console.log("I am sleeping 10 hours per day");
    }
}
class Developer1 extends Person1 {
    takeNap() {
        console.log("I am sleeping 5 hours per day");
    }
}
function getNap(param) {
    param.takeNap();
}
const person1 = new Person1();
const person2 = new Student1();
const person3 = new Developer1();
// getNap(person1);
// getNap(person2);
// getNap(person3);
// ---------------
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea());
}
getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(4, 2));
