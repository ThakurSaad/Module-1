type CrushType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};

const crush1: CrushType = {
  name: "Lisa Pakhi",
  age: 25,
  profession: "Artist",
  address: "South Korea",
};

const crush2: CrushType = {
  name: "Rosie Pakhi",
  age: 27,
  profession: "Artist",
  address: "South Korea",
};

type CrushMarriedType = boolean;
const isCrushMarried: CrushMarriedType = false;

// ----------
type OperationType = (x: number, y: number) => number;

const calculate = (
  n1: number, // 10
  n2: number, // 20
  operation: OperationType // (x, y) => x + y
) => {
  return operation(n1, n2);
};

calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
// console.log(calculate(10, 20, (x, y) => x - y));
// console.log(calculate(10, 20, (x, y) => x * y));
// console.log(calculate(10, 20, (x, y) => x * y));
