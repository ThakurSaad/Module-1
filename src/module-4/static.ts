/* 
class Counter {
  counter: number;

  constructor(counter: number) {
    this.counter = counter;
  }

  increment(): number {
    return (this.counter += 1);
  }
  decrement(): number {
    return (this.counter -= 1);
  }
}

const instance1 = new Counter(0);
const instance2 = new Counter(1);

console.log(instance1.increment());
console.log(instance2.increment()); 
*/

class Counter {
  static counter: number = 0;

  static increment(): number {
    return (Counter.counter += 1);
  }
  static decrement(): number {
    return (Counter.counter -= 1);
  }
}

console.log(Counter.increment()); // 0 -> 1
console.log(Counter.increment()); // 1 -> 2
