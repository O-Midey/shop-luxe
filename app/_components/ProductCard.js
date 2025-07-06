import Image from "next/image";
import Wishlist from "./icons/Wishlist";
import AddToCart from "./icons/AddToCart";

export default function ProductCard({ product, theme = "light" }) {
  const textColor = theme === "light" ? "text-black" : "text-white";
  const categoryColor = theme === "light" ? "text-gray-500" : "text-gray-400";

  return (
    <div className="flex flex-col">
      <div className="relative border bg-white shadow-md group overflow-hidden w-full aspect-square">
        {/* Image */}
        <Image
          src={product.images?.[0] || "/placeholder.png"}
          alt={product.title || "Product image"}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-300"></div>

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

      {/* Bottom info */}
      <div className={`flex justify-between items-center mt-3 ${textColor}`}>
        <p className="text-sm font-medium line-clamp-1">
          {product.title || "Unnamed Product"}
        </p>
        <p>${product.price ? product.price.toFixed(2) : "N/A"}</p>
      </div>
      <p className={`${categoryColor} capitalize text-sm`}>
        {product.category?.name || product.category}
      </p>
    </div>
  );
}
