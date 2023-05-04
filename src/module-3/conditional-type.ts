type a1 = null;
type a2 = undefined;
type a3 = number;

type a4 = a1 extends string ? string : null;

// --------------
// nested conditional type
type d = a1 extends null
  ? null
  : a2 extends number
  ? number
  : a3 extends null
  ? null
  : never;

// --------------
type Sheikh = {
  wife1: string;
  wife2: string;
};

/* 
type CheckProperty1<T> = T extends { wife1: string } ? true : false;
type CheckProperty2<T> = T extends { wife2: string } ? true : false;

type CheckWife1 = CheckProperty1<Sheikh>;
type CheckWife2 = CheckProperty2<Sheikh>; 
*/

// type CheckProperty<T, U> = U extends keyof Sheikh ? true : false;
type CheckProperty<T, U> = U extends keyof T ? true : false;

type CheckWife1 = CheckProperty<Sheikh, "wife1">;
type CheckWife2 = CheckProperty<Sheikh, "wife2">;

// --------------
// hardcore one
// Removing a specific value from a type

type Bandhubi = "Monica" | "Rachel" | "Pheobe";

/*
type RemoveBandhubi<T> = T extends "Rachel" ? never : T;
type CurrentType = RemoveBandhubi<Bandhubi>;
*/

type RemoveBandhubi<T, K> = T extends K ? never : T;

type CurrentType1 = RemoveBandhubi<Bandhubi, "Monica">;
type CurrentType2 = RemoveBandhubi<Bandhubi, "Rachel">;
