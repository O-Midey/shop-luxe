import ProductList from "../_components/ProductList";
import { getProducts } from "../_lib/api";

export default async function New() {
  const data = await getProducts();
  const newProducts = data.sort(() => Math.random() - 0.5).slice(0, 15);

  return (
    <div className="px-20 py-10">
      <ProductList heading={"New Arrivals"} products={newProducts} />
    </div>
  );
}
