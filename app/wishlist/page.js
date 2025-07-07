"use client";
import Link from "next/link";
import { useWishlistStore } from "@/app/_store/wishlistStore";
import Image from "next/image";

export default function WishlistPage() {
  const items = useWishlistStore((state) => state.items);
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );

  return (
    <div className="px-20 py-12 w-full mx-auto">
      <h1 className="text-3xl font-semibold mb-6">My Wishlist</h1>

      {items.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 mb-4">
            Your wishlist is currently empty. Add some items now 😉
          </p>
          <Link
            href="/"
            className="underline text-black hover:text-blue-400 mt-50"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <p className="py-6">
            You currently have {items.length} items on your wishlist 🤞🏼
          </p>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {items.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 flex flex-col space-y-4"
              >
                <div className="relative w-full aspect-square bg-gray-50">
                  <Image
                    src={
                      product.images?.[0] ||
                      product.images ||
                      product.category?.image ||
                      "/placeholder.png"
                    }
                    alt={product.title || product.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h2 className="text-lg font-semibold line-clamp-1">
                    {product.title || product.name}
                  </h2>
                  <p className="text-sm text-gray-400 capitalize">
                    {product.category?.name || product.category}
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    ${Math.round(product.price)}
                  </p>
                </div>

                <div className="flex space-x-4 mt-auto">
                  <Link
                    href={`/product/${product.id}?api=escuelajs`}
                    className="flex-1 text-center py-2 bg-black text-white hover:bg-gray-800 transition"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="px-4 py-2 border text-black hover:bg-gray-100 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
