"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("./module");
const adder = (param1, param2, param3) => {
    return param1 + param2 + param3;
};
const added = (0, module_1.adder)(3, 4);
console.log(added);
