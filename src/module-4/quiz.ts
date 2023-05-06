class A1 {
  num: number;

  constructor(num: number) {
    this.num = num;
  }
}

class B1 extends A1 {
  constructor(num: number) {
    super(num);
  }
}

console.log(new B1(3));
