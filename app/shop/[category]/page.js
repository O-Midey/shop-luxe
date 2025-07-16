import ProductList from "@/app/_components/ProductList";
import {
  getAllProducts,
  getProducts as getProductsByCategory,
} from "@/app/_lib/getAllProduct";

export default async function Page({ params }) {
  const { category } = params;

  async function safeGetProducts(category) {
    const data = await getProductsByCategory(category);
    return data?.products ?? [];
  }

  const headings = {
    new: "New Products",
    sale: "Products on Sale",
  };

  const displayHeading =
    headings[category] ||
    category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  let products = [];

  const categoryGroups = {
    men: ["mens-shirts", "mens-shoes", "mens-watches"],
    home: ["furniture", "groceries", "home-decoration", "kitchen-accessories"],
    women: [
      "beauty",
      "fragrances",
      "womens-bags",
      "womens-dresses",
      "womens-jewellery",
      "womens-shoes",
      "womens-watches",
    ],
  };

  if (category === "new") {
    const allProducts = await getAllProducts();
    products = allProducts.sort(() => Math.random() - 0.5).slice(0, 15);
  } else if (category === "sale") {
    const allProducts = await getAllProducts();
    products = allProducts.filter((_, i) => i % 3 === 0).slice(0, 15);
  } else if (categoryGroups[category]) {
    const promises = categoryGroups[category].map(safeGetProducts);
    const results = await Promise.all(promises);
    products = results.flat();
  } else {
    const data = await getProductsByCategory(category);
    products = data?.products ?? [];
  }

  return (
    <div className="px-20 py-10 capitalize">
      <ProductList heading={displayHeading} products={products} />
    </div>
  );
}
