import { adder as addTwo } from "./module";
const adder = (param1, param2, param3) => {
    return param1 + param2 + param3;
};
const added = addTwo(3, 4);
console.log(added);
