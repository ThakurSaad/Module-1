class Person {
  // 1. defining class properties
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    // 2. initializing parameters
    this.name = name; // 3. assigning parameters to class properties
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number) {
    return `This ${this.name} will sleep for ${hours}`;
  }
}
/*  
// this also works like Student class

class Student1 extends Person {}
*/

// inheriting from parent class Person
class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

// inheriting from parent class Person
class Teacher extends Person {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClasses(classes: number) {
    return `This ${this.name} will take ${classes} classes`;
  }
}
