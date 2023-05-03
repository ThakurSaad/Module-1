const user: {
  company: "Programming Hero";
  name: string;
  age: number;
  isMarried: boolean;
  likes?: string;
} = {
  company: "Programming Hero",
  name: "Montu mia",
  age: 52,
  isMarried: true,
};

//

const user2: {
  readonly company: string;
  name: string;
  age: number;
  isMarried: boolean;
  likes?: string;
} = {
  company: "Programming Hero",
  name: "Montu mia",
  age: 52,
  isMarried: true,
};

// user2.company = "Programming Hero";
