const createArray1 = (param: string): string[] => {
  return [param];
};

// const createArray2 = <T>(param: T): T[] => {
//   return [param];
// };

// using tuple
// arrow function
const createArray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

// normal function
function createArray3<X, Y>(param1: X, param2: Y): [X, Y] {
  return [param1, param2];
}

const result1 = createArray2<string, string>("Japan", "I love Bangladesh");

const result2 = createArray2<boolean, Array<string>>(false, ["USA"]);

const result3 = createArray2<object, string>(
  { name: "India" },
  "I love Bangladesh"
);

interface IName {
  name: string;
}

const result4 = createArray2<IName, boolean>({ name: "India" }, true);

// ------------------
// spread operator

const myInfo = {
  name: "Saad",
  age: 22,
  salary: 100000000,
};

// adding a object and a variable
const addMeToMyCrushMind = <T>(myInfo: T) => {
  const crush = "Kate Winslet";
  const newData = { ...myInfo, crush };
  return newData;
};

const result5 = addMeToMyCrushMind(myInfo);
result5.age = 21;
console.log(result5);
