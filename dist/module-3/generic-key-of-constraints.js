"use strict";
const a = "address";
const b = "address";
// ------------
function getProperty(obj, key) {
    console.log(obj[key]);
}
const result7 = getProperty({ name: "Mr. X", age: 100 }, "age");
// Y extends keyof X means Y = "name" | "age"
