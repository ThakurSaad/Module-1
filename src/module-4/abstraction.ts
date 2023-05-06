// abstract interface

// IVehicle interface is abstract here.
// Cause we don't know what startEngine(), move() etc function are doing. The logics are abstract or invisible.
// Thus abstraction of OOP is implemented

interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Vehicle implements IVehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}

  startEngine(): void {
    console.log("starting engine");
  }
  stopEngine(): void {
    console.log("stopping engine");
  }
  move(): void {
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

abstract class Vehicle2 {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}

  abstract startEngine(): void;
  abstract stopEngine(): void;

  move(): void {
    console.log("moving car");
  }
}

class Car extends Vehicle2 {
  startEngine(): void {
    console.log("Starting engine");
  }
  stopEngine(): void {
    console.log("Stopping Engine");
  }
}

// const vehicle1 = new Car("")
