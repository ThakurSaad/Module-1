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

const filterProduct = <T extends IProduct>(
  productArr: T[],
  criterion: keyof T,
  value: T[keyof T]
) => {
  const newArr = productArr.filter((product) => product[criterion] === value);
  console.log(newArr);
  return newArr;
};

filterProduct(productArr, "category", "entertainment");

/**
 * T extends IProduct
 * T === {  id: number; name: string; price: number; category: string;}
 * 
 * T[keyof T]
 * When T = { id: 6, name: "comic", price: 0, category: "entertainment" }
 * keyof T = "id" | "name" | "comic" | "price" | "category"
 * for category, T [keyof T] = T ["category"]
 * for id, T [keyof T] = T ["id"]
 */
