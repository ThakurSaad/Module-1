"use strict";
/*
class Animal {
  // 1. defining class properties
  public name: string;
  public species: string;
  public sound: string;

  constructor(name: string, species: string, sound: string) {
    // 2. initializing parameters
    // 3. assigning parameters to class properties
    // this.name is class property
    // name is the initialized parameter

    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  public makeSound() {
    console.log(`This ${this.name} says ${this.sound}`);
  }
}
*/
// --------------------------------------
// using parameter properties
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
// creating instance
const dog = new Animal("German Shepard", "dog", "Ghew Ghew");
const cat = new Animal("Mini", "cat", "meow");
dog.makeSound();
cat.makeSound();
