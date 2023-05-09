"use strict";
class A1 {
    constructor(num) {
        this.num = num;
    }
}
class B1 extends A1 {
    constructor(num) {
        super(num);
    }
}
console.log(new B1(3));
