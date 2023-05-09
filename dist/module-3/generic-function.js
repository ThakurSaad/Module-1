"use strict";
const createArray1 = (param) => {
    return [param];
};
// const createArray2 = <T>(param: T): T[] => {
//   return [param];
// };
// using tuple
// arrow function
const createArray2 = (param1, param2) => {
    return [param1, param2];
};
// normal function
function createArray3(param1, param2) {
    return [param1, param2];
}
const result1 = createArray2("Japan", "I love Bangladesh");
const result2 = createArray2(false, ["USA"]);
const result3 = createArray2({ name: "India" }, "I love Bangladesh");
const result4 = createArray2({ name: "India" }, true);
// ------------------
// spread operator
const myInfo = {
    name: "Saad",
    age: 22,
    salary: 100000000,
};
// adding a object and a variable
const addMeToMyCrushMind = (myInfo) => {
    const crush = "Kate Winslet";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const result5 = addMeToMyCrushMind(myInfo);
result5.age = 21;
console.log(result5);
