export async function getProducts() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching products:", err);
  }
}

export async function getCategories() {
  try {
    const res = await fetch("https://dummyjson.com/products/categories", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching categories", err);
  }
}
