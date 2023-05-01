// ternary operator
const age: number = 19;
const isAdult = age >= 18 ? "Yes" : "No";

// ------------
// Nullish Coalescing Operator
// Null and Undefined

const isAuthenticatedUser = "demo";
const userName = isAuthenticatedUser ?? "Guest";

// ------------
type Manush = {
  name: string;
  age: number;
  address: {
    city: "No city";
    road: "No road";
    home?: "";
  };
};

const manush: Manush = {
  name: "Boltu",
  age: 16,
  address: {
    city: "No city",
    road: "No road",
  },
};
const home = manush?.address?.home ?? "No home";

console.log({ home });
