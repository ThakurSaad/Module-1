type NoobDeveloper = {
  name: string;
};

// type JuniorDeveloper = {
//   name: string;
//   expertise: string;
//   experience: number;
// };

// intersection
type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experience: number;
};

// Union
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Moznu Ali",
  expertise: "Javascript",
  experience: 6,
};

// intersection
type NextLevelDeveloper = JuniorDeveloper & {
  leaderShipExperience: number;
  level: "junior" | "mid" | "senior";
};

// intersection
const developer: NextLevelDeveloper = {
  name: "Super vai",
  expertise: "Typescript",
  experience: 2,
  leaderShipExperience: 1,
  level: "mid",
};

console.log(developer);
