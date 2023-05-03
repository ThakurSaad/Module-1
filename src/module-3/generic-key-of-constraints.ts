type PersonType = {
  name: string;
  age: number;
  address: string;
};

type NewType = "name" | "age" | "address";

type NewTypeKeyof = keyof PersonType;

const a: NewType = "address";
const b: NewTypeKeyof = "address";

// ------------
function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  console.log(obj[key]);
}

const result7 = getProperty({ name: "Mr. X", age: 100 }, "age");

// Y extends keyof X means Y = "name" | "age"
