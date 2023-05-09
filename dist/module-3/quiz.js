"use strict";
function getArrayItem(// what is the value of K here?
arr, index, key) {
    const item = arr[index];
    //   console.log(item, "\n", item[key]);
    return item[key];
}
const users = [
    { name: "John", age: 30 },
    { name: "Mary", age: 25 },
];
function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
