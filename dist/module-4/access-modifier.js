"use strict";
class BankAccount {
    // protected _balance: number;
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getBalance() {
        console.log(`Current balance is ${this._balance}`);
    }
    addDeposit(amount) {
        console.log((this._balance += amount));
    }
}
class StudentAccount extends BankAccount {
    test() {
        /*
        this._balance= 20
        
        // _balance is accessible from here when used `protected`
        // because StudentAccount is sub-class of BankAccount
        // _balance is not accessible if used `private`
        */
    }
}
const myAccount = new BankAccount("12ad2c", "thakur", 20);
myAccount.addDeposit(20);
myAccount.getBalance();
