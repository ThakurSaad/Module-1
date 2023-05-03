let emni: any;

emni = "Next level dev";

// (emni as string).length; // asserting type
<string>emni.length; // alternative syntax

// -------------------------
function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The converted result is ${value}`;
  }

  if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
}

const resultToBeNumber = kgToGram(5) as number; // asserting type
// const resultToBeNumber = <number>kgToGram(5)
const resultToBeString = kgToGram("5") as string; // asserting type

// -------------------------

type CustomErrorType = {
  message: string;
};

try {
  // blink
} catch (error) {
  console.log((error as CustomErrorType).message);
}
