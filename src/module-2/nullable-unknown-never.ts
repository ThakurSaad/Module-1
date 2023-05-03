const searchName = (value: string | null) => {
  if (value === null) console.log("There is nothing to search");
  else console.log("Searching...");
};

// searchName(null);

// ---------------
const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 1000) / 3600; // kmh^-1 to ms^-1

    console.log(`My speed is ${convertedSpeed.toFixed(2)}`);
  } else if (typeof speed === "string") {
    const value = parseFloat(speed.split(" ")[0]);
    const convertedSpeed = (value * 1000) / 3600;

    console.log(`My speed is ${convertedSpeed.toFixed(2)}`);
  } else {
    console.log("Wrong Type");
  }
};

// getMyCarSpeed(10);
// getMyCarSpeed("10 kmh^-1");
// getMyCarSpeed(true);

// ---------------
function throwError(message: string): never {
  throw new Error(message);
}

// throwError("Abort abort");
