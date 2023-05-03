// --------------------------
// Object

type User = {
  name: string;
  age: number;
};

type ExtendedUser = User & {
  role: string;
};

interface IUser {
  name: string;
  age: number;
}

interface IExtendedUser extends IUser {
  role: string;
}

// --------------------------
const userWithTypeAlias: User = {
  name: "Type alias",
  age: 23,
};

const userWithExtendedTypeAlias: ExtendedUser = {
  name: "Extend Type Alias",
  age: 5000,
  role: "devourer",
};

const userWithInterface: IUser = {
  name: "Interface",
  age: 4000,
};

const userWithExtendedInterface: IExtendedUser = {
  name: "Extended Interface",
  age: 3020,
  role: "dumb",
};

// --------------------------
// function

type AddNumbersType = (n1: number, n2: number) => number;

interface IAddNumbers {
  (n1: number, n2: number): number;
}

// const addNumbers: AddNumbersType = (n1, n2) => n1 + n2;
const addNumbers: IAddNumbers = (n1, n2) => n1 + n2;

// --------------------------
// array

type RollNumbersType = number[];

interface IRollNumbers {
  [index: number]: number;
}

// const rollNumbers: RollNumbersType = [1, 2, 3, 4];
const rollNumbers: IRollNumbers = [1, 2, 3, 4];
