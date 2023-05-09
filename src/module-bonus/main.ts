// import { adder as addTwo } from "./module";
// import * as Methods from "./module";
// import avg, { multiply } from "./module";
// import Jekono from "./module";
/* 
import Jekono from "./utils/adder"; // can name anything cause of default export
import avg from "./utils/avg";
import divide from "./utils/divide";
import subtract from "./utils/subtract";
*/

import methods from "./utils/index";

const adder = (param1: number, param2: number, param3: number): number => {
  return param1 + param2 + param3;
};

const added = methods.addTwo(3, 4);
const minus = methods.subtract(3, 4);
