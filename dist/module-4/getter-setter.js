"use strict";
class BankAccount1 {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
    set deposit(amount) {
        this._balance += amount;
    }
}
class StudentAccount1 extends BankAccount1 {
    test() { }
}
const myAccount1 = new BankAccount1("12ad2c", "thakur", 30);
myAccount1.deposit = 20;
console.log(myAccount1.balance);
/*
myAccount1.addDeposit(20);
myAccount1.getBalance();
*/
