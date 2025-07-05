import Image from "next/image";
import Wishlist from "./icons/Wishlist";
import AddToCart from "./icons/AddToCart";

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col">
      <div className="relative border bg-white p-4 shadow-md group overflow-hidden">
        <div className="relative w-full aspect-square overflow-hidden hover:opacity-100">
          <Image
            src={product.images?.[0] || "/placeholder.png"}
            alt={product.title || "Product image"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Icons fade-in on hover */}
          <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <button className="p-2 rounded-full bg-white shadow hover:bg-gray-200 transition hover:scale-110">
              <Wishlist color="black" />
            </button>
            <button className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition hover:scale-110">
              <AddToCart />
            </button>
          </div>
        </div>
      </div>

      {/* Product info */}
      <div className="flex justify-between items-center text-white mt-3">
        <p className="text-sm font-medium line-clamp-1">
          {product.title || "Unnamed Product"}
        </p>
        <p>${product.price ? product.price.toFixed(2) : "N/A"}</p>
      </div>
      <p className="text-gray-400 capitalize">
        {product.category?.name || product.category}
      </p>
    </div>
  );
}
