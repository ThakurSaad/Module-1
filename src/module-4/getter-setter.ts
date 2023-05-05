class BankAccount1 {
  public readonly id: string;
  public name: string;
  private _balance: number;

  constructor(id: string, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  get balance(): number {
    return this._balance;
  }
  set deposit(amount: number) {
    this._balance += amount;
  }

  /*   
  getBalance() { 
    console.log(`Current balance is ${this._balance}`);
  }
  addDeposit(amount: number) {
    console.log((this._balance += amount));
  } 
  */
}

class StudentAccount1 extends BankAccount1 {
  test() {}
}

const myAccount1 = new BankAccount1("12ad2c", "thakur", 30);

myAccount1.deposit = 20;
console.log(myAccount1.balance);

/* 
myAccount1.addDeposit(20);
myAccount1.getBalance(); 
*/
