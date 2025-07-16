"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function ProductList({ heading, products }) {
  const [visibleCount, setVisibleCount] = useState(8);

  const showMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const hasMore = visibleCount < products.length;

  return (
    <>
      <h2 className="text-2xl mb-10">{heading}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products && products.length > 0 ? (
          products
            .slice(0, visibleCount)
            .map((product) => (
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

      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={showMore}
            className="px-6 py-3 border border-black hover:bg-black hover:text-white transition"
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
}
