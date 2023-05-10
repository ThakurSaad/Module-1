// Utility Types
// Pick

interface Person10 {
  name: string;
  age: number;
  email?: string;
  contactNo: string;
}

// picks the specified properties
type contact = Pick<Person10, "email" | "contactNo">;

// ----------------------
// Omit

// omits the specified properties
type Name = Omit<Person10, "age" | "email" | "contactNo">;

// ----------------------
// Partial

// makes all properties optional
type Optional = Partial<Person10>;

// ----------------------
// Required

// makes all properties required
type RequiredType = Required<Person10>;

// ----------------------
// Readonly

// makes all properties readonly
type ReadonlyType = Readonly<Person10>;

// ----------------------
// Record

/* 
type MyObj = {
  a: string;
  b: string;
  c: string;
};
*/

// using index signature
/* 
type MyObj = {
  //   [key: string]: string;
  [key: "a" | "b" | "c"]: string; 
}; 
*/

type MyObj = Record<"a" | "b" | "c", string>;

const obj: MyObj = {
  a: "a",
  b: "b",
  c: "c",
};
