import ProductCard from "./ProductCard";
import Link from "next/link";

export default function ProductList({ heading, products }) {
  return (
    <div>
      <h2 className="text-2xl mb-10">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} theme="light" />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p>No Product available at this time :(</p>
            <Link
              href="/"
              className="text-gray-800 hover:text-gray-600 underline"
            >
              Go Back Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
