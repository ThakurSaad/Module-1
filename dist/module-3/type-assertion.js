"use strict";
let emni;
emni = "Next level dev";
// (emni as string).length; // asserting type
emni.length; // alternative syntax
// -------------------------
function kgToGram(param) {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The converted result is ${value}`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
}
const resultToBeNumber = kgToGram(5); // asserting type
// const resultToBeNumber = <number>kgToGram(5)
const resultToBeString = kgToGram("5"); // asserting type
try {
    // blink
}
catch (error) {
    console.log(error.message);
}
