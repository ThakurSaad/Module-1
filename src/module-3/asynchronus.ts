// Mocking
// Promise with different data types
// Promise of string

const makePromiseString = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data fetched";

    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
    }
  });
};

const getPromiseString = async (): Promise<void> => {
  const data = await makePromiseString();
  console.log(data);
};

// getPromise();

// ----------------
// Promise of boolean

const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;

    if (data) resolve(data);
    else reject("Failed to fetch data");
  });
};

const getPromiseBoolean = async (): Promise<void> => {
  const data = await makePromiseBoolean();
  console.log(data);
};

// getPromise2();

// ----------------
// Promise of object

interface IData {
  data: string;
}

const makePromiseObject = (): Promise<IData> => {
  return new Promise<IData>((resolve, reject) => {
    const data: IData = { data: "Data is fetched" };

    if (data) resolve(data);
    else reject("Failed to fetch data");
  });
};

const getPromiseObject = async (): Promise<IData> => {
  const data = await makePromiseObject();
  console.log(data);
  return data;
};

// getPromiseObject();

// ----------------
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await response.json();
};

const getTodoData = async (): Promise<ITodo> => {
  const data = await getTodo();
  console.log(data);
  return data;
};

getTodoData();
