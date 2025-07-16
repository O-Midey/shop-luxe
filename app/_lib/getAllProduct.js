// app/_lib/getAllProduct.js

async function getAllProducts() {
  const res = await fetch(`https://dummyjson.com/products?limit=100`);
  if (!res.ok) throw new Error("Failed to fetch all products");
  return (await res.json()).products;
}

async function getProducts(category) {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  if (!res.ok) throw new Error(`Failed to fetch category ${category}`);
  return await res.json();
}

export default getAllProducts;
export { getAllProducts, getProducts };
