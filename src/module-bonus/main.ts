import { adder as addTwo, subtract } from "./module";

const adder = (param1: number, param2: number, param3: number): number => {
  return param1 + param2 + param3;
};

const added = addTwo(3, 4);
console.log(added);
