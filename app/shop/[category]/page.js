import ProductList from "@/app/_components/ProductList";
import {
  getAllProducts,
  getProducts as getProductsByCategory,
} from "@/app/_lib/api";

export default async function Page({ params }) {
  const { category } = params;
  let products;
  let headingText = category;

  if (category === "new" || category === "sale") {
    // For "name" or "sale", fetch all products and randomize/slice
    const allProductsData = await getAllProducts();
    products = allProductsData.sort(() => Math.random() - 0.5).slice(0, 15);
    // adjust the heading for "name" or "sale"
    headingText = category === "new" ? "New Products " : "Products on Sale"; // Customize heading
  } else {
    products = await getProductsByCategory(category);
  }

  products = products || [];

  return (
    <div className="px-20 py-10 capitalize">
      <ProductList heading={headingText} products={products} />
    </div>
  );
}
