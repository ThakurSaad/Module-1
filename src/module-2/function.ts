// normal function // default parameter
function addNumber(n1: number, n2: number, n3: number = 10): number {
  return n1 + n2 + n3;
}

addNumber(30, 20);

// -------------
// spread operator
const myFriends = ["abul", "babul", "kabul"];
const newFriends = ["orina", "jorina", "karina"];

myFriends.push(...newFriends);

// console.log(myFriends);

// -------------
// rest parameter
const greetFriends = (...friends: string[]): void =>
  friends.forEach((friend: string) => console.log(`Hi ${friend}`));

greetFriends("hashem", "kashem", "batashen", "ashen", "boshen");

// -------------
// array and object destructuring


// -------------
const addArrow = (n1: number, n2: number): number => n1 + n2;

// -------------
const arr = [1, 2, 3, 4];
const newArr = arr.map((elem: number) => elem * elem);

// -------------
const person: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "Saad",
  balance: 5,
  addBalance(money: number) {
    console.log(`My new balance is ${this.balance + money}`);
  },
};
