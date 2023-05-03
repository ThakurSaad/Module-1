interface CrushInterface<T, U = null> {
  name: string;
  husband: T;
  kids?: U;
}

// ------------------------
const crush01: CrushInterface<number, undefined | null> = {
  name: "lalalalisa",
  husband: 0,
};

// ------------------------
const crush02: CrushInterface<boolean> = {
  name: "lalalalisa",
  husband: false,
};

// ------------------------
interface IHusband {
  name: string;
  salary: number;
}

const crush03: CrushInterface<IHusband, number> = {
  name: "lalalalisa",
  husband: {
    name: "Thakur",
    salary: 1000000,
  },
  kids: 3,
};

// ------------------------
interface PersonInterface {
  name: string;
  age: number;
}

const crush04: CrushInterface<PersonInterface, PersonInterface> = {
  name: "Jenny",
  husband: {
    name: "Thakur",
    age: 22,
  },
  kids: {
    name: "Nezuko",
    age: 21,
  },
};
