type MyInfoType = {
  name: string;
  age: number;
  salary: number;
  other1: boolean;
  other2: null;
};

const myInfo1: MyInfoType = {
  name: "Saad",
  age: 22,
  salary: 100000000,
  other1: false,
  other2: null,
};

const addMeToMyCrushMind1 = <
  T extends { name: string; age: number; salary: number }
>(
  myInfo: T
) => {
  const crush = "Kate Winslet";
  const newData = { ...myInfo, crush };
  return newData;
};

// const result6 = addMeToMyCrushMind1<MyInfoType>(myInfo1);
const result6 = addMeToMyCrushMind1(myInfo1);
// result6.
