"use strict";
// abstract interface
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log("starting engine");
    }
    stopEngine() {
        console.log("stopping engine");
    }
    move() {
        console.log("moving car");
    }
    extraMethod() {
        console.log("extra method");
    }
}
const vehicle = new Vehicle("Car", "Rolls Royce", 200);
// ---------------
// abstract class
// startEngine() and stopEngine() are abstract
// Cause there is no logic, just the shape
class Vehicle2 {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    move() {
        console.log("moving car");
    }
}
class Car extends Vehicle2 {
    startEngine() {
        console.log("Starting engine");
    }
    stopEngine() {
        console.log("Stopping Engine");
    }
}
// const vehicle1 = new Car("")
