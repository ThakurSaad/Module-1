function getArrayItem<T, K extends keyof T>( // what is the value of K here?
  arr: T[],
  index: number,
  key: K
): T[K] { // what does T[K] mean?
  const item = arr[index];

  //   console.log(item, "\n", item[key]);

  return item[key];
}

const users = [
  { name: "John", age: 30 },
  { name: "Mary", age: 25 },
];

// getArrayItem(users, 0, "name");

// ---------------------

interface Person {
  firstName: string;
  lastName: string;
}

function fullName<T extends Person>(person: T): string {
  return `${person.firstName} ${person.lastName}`;
}
