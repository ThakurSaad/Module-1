/* 
const rollNumbers1: Array<number> = [1, 2, 3];
const rollNumbers2: Array<string> = ["1", "2", "3"];
const rollNumbers3: Array<boolean> = [true, false, true];
const userNameAndRollNumbers: Array<{ name: string; roll: number }> = [
  { name: "somir", roll: 34 },
  { name: "jomir", roll: 40 },
];
*/

// ------------------
// Generic array type
// single parameter

type GenericArray<T> = Array<T>;

const rollNumbers1: GenericArray<number> = [1, 2, 3];
const rollNumbers2: GenericArray<string> = ["1", "2", "3"];
const rollNumbers3: GenericArray<boolean> = [true, false, true];

type UserNameAndRollNumbersType = {
  name: string;
  roll: number;
};

const userNameAndRollNumbers: GenericArray<UserNameAndRollNumbersType> = [
  { name: "somir", roll: 34 },
  { name: "jomir", roll: 40 },
];

// ------------------
// multiple parameter

type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ["Thakur", "Kate Winslet"];

type RelationWithSalaryType = { name: string; salary: number };
interface IRelationWithSalaryType {
  name: string;
  salary: number;
}

const relationWithSalary: GenericTuple<RelationWithSalaryType, string> = [
  { name: "123", salary: 200000 },
  "lalalalisa",
];

const relationWithSalary2: GenericTuple<RelationWithSalaryType, string> = [
  { name: "thakur", salary: 200000 },
  "lalalalisa",
];
