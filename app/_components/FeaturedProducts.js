import { getProducts } from "../_lib/api";
import ProductCard from "./ProductCard";

export default async function FeaturedProducts() {
  const products = await getProducts();
  const shuffledProducts = products.sort(() => Math.random() - 0.5).slice(0, 9);

  return (
    <section className="bg-black text-white px-10 md:px-20 lg:px-40 py-10">
      <h2 className="text-2xl mb-6 text-center py-25">FEATURED PRODUCTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {shuffledProducts.length > 0 ? (
          shuffledProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full">
            No featured products at this time.
          </p>
        )}
      </div>
    </section>
  );
}
