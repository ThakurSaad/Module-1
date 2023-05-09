"use strict";
var _a, _b;
// ternary operator
const age = 19;
const isAdult = age >= 18 ? "Yes" : "No";
// ------------
// Nullish Coalescing Operator
// Null and Undefined
const isAuthenticatedUser = "demo";
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : "Guest";
const manush = {
    name: "Boltu",
    age: 16,
    address: {
        city: "No city",
        road: "No road",
    },
};
const home = (_b = (_a = manush === null || manush === void 0 ? void 0 : manush.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : "No home";
console.log({ home });
