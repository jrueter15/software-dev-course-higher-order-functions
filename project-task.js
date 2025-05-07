/*
===========================================
🛒 Higher-Order Functions: Product Utilities
===========================================

🎯 Objective:
Students will create and work with higher-order functions to transform and manipulate data.

They will:
- Write higher-order functions that accept callbacks to apply transformations dynamically
- Practice returning functions from higher-order functions for reusable, customizable utilities
- Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations
*/

// ============================================
// 📦 Starting Dataset: Product List
// ============================================

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

// ============================================
// 🔧 Tasks
// ============================================

/*
🔹 Task 1: Filter Products by Availability

Create a function `filterProducts` that accepts:
- an array of products
- a callback function

The callback should determine which products to include.
Example: filter by availability or price threshold.

Step-by-Step:
1. Define the `filterProducts` function with appropriate parameters.
2. Use the `filter()` method to apply the callback to the array.
3. Return the filtered result.
*/

// Created a function that accepts an array of products and a callback function
// Filtered products
// Creating a variable and setting equal to...passing products array and anonymous function as callback
// Calling it product, since it'll loop through every single product and return it if its inStock is truthy
// Wrote higher order function

function filterProducts(products, callback) {
  return products.filter(callback);
}
let isInStock = filterProducts(products, (product) => product.inStock);

/*
🔹 Task 2: Transform Product Names

Use `map()` to create a new array of product names in UPPERCASE.

Step-by-Step:
1. Use `map()` on the products array.
2. Extract and transform the `name` property to uppercase.
3. Store the result in a new variable.
*/

function productsUppercased(products) {
  return products.map((products) => products.name.toUpperCase());
}
let uppercaseOnly = productsUppercased(products);

/* Jay's Version
const productNamesUppercase = products.map(product => product.name.toUpperCase());
console.log(productNamesUppercase);
*/

/*
🔹 Task 3: Generate Discounted Prices

Write a higher-order function `applyDiscount` that:
- Accepts a discount percentage
- Returns a function that takes a product and returns a discounted price

Step-by-Step:
1. Define a function `applyDiscount` that takes `discountPercent`.
2. Return a new function that takes a product object.
3. Use this returned function inside a `map()` call to apply discounts to all products.
*/

function applyDiscount(discountPercentage) {
  return function (price) {
    return (discountPrice = price - (price * discountPercentage) / 100);
  };
}
const discount10 = applyDiscount(10);
const discountedProducts = products.map((product) => ({
  ...product,
  price: discount10(product.price),
}));

// Naming it discount10 makes it reusable

/*
🔹 Task 4: Calculate Total Inventory Value

Use `reduce()` to calculate the total value of products that are currently in stock.

Step-by-Step:
1. Use the `reduce()` method on the products array.
2. Add only the prices of products where `inStock` is true.
3. Store the total in a new variable.
*/

// Declaring a variable for the total value, filtering to get an array into inStock items, reducing the leftover array to return the sum
let totalValue = products
  .filter((product) => product.inStock)
  .reduce((total, product) => total + product.price, 0);

// ============================================
// 🧪 Console Test Your Work
// ============================================

console.log("\nFiltered products:", isInStock);
console.log("\nUppercased names:", uppercaseOnly);
console.log("\nDiscounted products:", discountedProducts);
console.log("\nTotal value in stock:", totalValue);
