"use strict";
// of guard
function addTwoNumbers(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
// A function to return something based on user type
function getUser(user) {
    if ("role" in user) {
        return `I am an ${user.role}`;
    }
    else {
        return `I am a normal user`;
    }
}
const normalUser1 = { name: "Mr. Kallu" };
const adminUser1 = { name: "Mr. Gallu", role: "admin" };
console.log(getUser(normalUser1));
console.log(getUser(adminUser1));
// -------------------
// instanceof guard
class Animal01 {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log("Im making sound");
    }
}
class Dog extends Animal01 {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log("Im barking");
    }
}
class Cat extends Animal01 {
    constructor(name, species) {
        super(name, species);
    }
    makeMeow() {
        console.log("Im meowing");
    }
}
function getAnimal(animal) {
    if (animal instanceof Dog)
        animal.makeBark();
    else if (animal instanceof Cat)
        animal.makeMeow();
    else
        animal.makeSound();
}
const animal1 = new Dog("Bob", "dog");
const animal2 = new Cat("Oggy", "cat");
getAnimal(animal2);
/*
// another alternative of getAnimal()
// checking instanceof by function

function isDog(animal: Animal01): animal is Dog {
  return animal instanceof Dog;
}

function isCat(animal: Animal01): animal is Cat {
  return animal instanceof Cat;
}

function getAnimal(animal: Animal01) {
  if (isDog(animal)) animal.makeBark();
  else if (isCat(animal)) animal.makeMeow();
  else animal.makeSound();
}
*/
