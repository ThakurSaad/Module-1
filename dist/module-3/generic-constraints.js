"use strict";
const myInfo1 = {
    name: "Saad",
    age: 22,
    salary: 100000000,
    other1: false,
    other2: null,
};
const addMeToMyCrushMind1 = (myInfo) => {
    const crush = "Kate Winslet";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
// const result6 = addMeToMyCrushMind1<MyInfoType>(myInfo1);
const result6 = addMeToMyCrushMind1(myInfo1);
// result6.
