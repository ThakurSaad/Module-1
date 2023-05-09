"use strict";
// normal function // default parameter
function addNumber(n1, n2, n3 = 10) {
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
const greetFriends = (...friends) => friends.forEach((friend) => console.log(`Hi ${friend}`));
greetFriends("hashem", "kashem", "batashen", "ashen", "boshen");
// -------------
// array and object destructuring
// -------------
const addArrow = (n1, n2) => n1 + n2;
// -------------
const arr = [1, 2, 3, 4];
const newArr = arr.map((elem) => elem * elem);
// -------------
const person = {
    name: "Saad",
    balance: 5,
    addBalance(money) {
        console.log(`My new balance is ${this.balance + money}`);
    },
};
