/**
 * You have an interface for Product, containing the product's id, name, price, and category.
 * You want to filter an array of Products based on a specific criterion and value.
 *
 * Write a TypeScript generic function that takes this array, a criterion , and returns a new
 * array containing only the products that match the given criterion and value. Use a generic
 * type parameter in the function signature to ensure type safety.
 */

interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
}

const productArr: IProduct[] = [
  { id: 1, name: "pen", price: 5, category: "study" },
  { id: 2, name: "book", price: 500, category: "study" },
  { id: 3, name: "pencil", price: 5, category: "study" },
  { id: 4, name: "table", price: 5000, category: "furniture" },
  { id: 5, name: "chair", price: 500, category: "furniture" },
  { id: 6, name: "comic", price: 0, category: "entertainment" },
  { id: 7, name: "anime", price: 0, category: "entertainment" },
  { id: 8, name: "movie", price: 0, category: "entertainment" },
];

const filterProduct = <T, U>(productArr: T, value: U) => {
  const newArr = (productArr as IProduct[]).filter(
    (product) => product.category === value
  );
  console.log(newArr);
  return newArr;
};

filterProduct<IProduct[], string>(productArr, "study");
// How can I make the property dynamic? like I can send id, name, price etc dynamically.
