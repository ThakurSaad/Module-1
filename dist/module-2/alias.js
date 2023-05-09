"use strict";
const crush1 = {
    name: "Lisa Pakhi",
    age: 25,
    profession: "Artist",
    address: "South Korea",
};
const crush2 = {
    name: "Rosie Pakhi",
    age: 27,
    profession: "Artist",
    address: "South Korea",
};
const isCrushMarried = false;
const calculate = (n1, // 10
n2, // 20
operation // (x, y) => x + y
) => {
    return operation(n1, n2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
// console.log(calculate(10, 20, (x, y) => x - y));
// console.log(calculate(10, 20, (x, y) => x * y));
// console.log(calculate(10, 20, (x, y) => x * y));
