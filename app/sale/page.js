import ProductList from "../_components/ProductList";
import { getAllProducts } from "../_lib/api";

export const dynamic = "force-static";
export default async function New() {
  const data = await getAllProducts();
  const productsOnSale = data.sort(() => Math.random() - 0.5).slice(0, 15);

  return (
    <div className="px-20 py-10">
      <ProductList heading={"On Sale"} products={productsOnSale} />
    </div>
  );
}
