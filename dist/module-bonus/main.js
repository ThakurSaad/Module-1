"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./utils/index"));
const adder = (param1, param2, param3) => {
    return param1 + param2 + param3;
};
const added = index_1.default.addTwo(3, 4);
const minus = index_1.default.subtract(3, 4);
