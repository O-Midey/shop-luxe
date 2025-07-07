import Link from "next/link";
import { getAllProducts } from "../_lib/api";
import ProductCard from "./ProductCard";

export const dynamic = "force-static";

export default async function FeaturedProducts() {
  // Fetch from ESCUELAJS
  const data = await getAllProducts();
  const products = data.sort(() => Math.random() - 0.5).slice(0, 9);

  return (
    <section className="bg-black text-white px-10 md:px-20 lg:px-40 py-10">
      <h2 className="text-2xl mb-6 text-center py-25">FEATURED PRODUCTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.length ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              theme="dark"
              source="escuelajs" // ✅ pass it here so ProductCard builds URL correctly
            />
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
