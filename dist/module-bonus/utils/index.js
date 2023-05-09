"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adder_1 = __importDefault(require("./adder"));
const subtract_1 = __importDefault(require("./subtract"));
const multiply_1 = __importDefault(require("./multiply"));
const divide_1 = __importDefault(require("./divide"));
const avg_1 = __importDefault(require("./avg"));
exports.default = { addTwo: adder_1.default, subtract: subtract_1.default, multiply: multiply_1.default, divide: divide_1.default, avg: avg_1.default };
