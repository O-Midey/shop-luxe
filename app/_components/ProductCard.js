import Image from "next/image";
import Wishlist from "./icons/Wishlist";
import AddToCart from "./icons/AddToCart";
import Link from "next/link";

export default function ProductCard({ product, theme = "light", source }) {
  if (!product) return null; // protect against missing data

  const textColor = theme === "light" ? "text-black" : "text-white";
  const categoryColor = theme === "light" ? "text-gray-500" : "text-gray-400";

  const id = product.id || product._id;
  const href = `/product/${id}?api=${source}`;

  return (
    <Link href={href}>
      <div className="flex flex-col">
        <div className="relative border bg-white shadow-md group overflow-hidden w-full aspect-square">
          <Image
            sizes="(max-width: 1024px) 50vw, 25vw"
            src={product.images?.[0] || "/placeholder.png"}
            alt={product.title || "Product image"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className={`flex justify-between items-center mt-3 ${textColor}`}>
          <p className="text-sm font-medium line-clamp-1">
            {product.title || "Unnamed Product"}
          </p>
          <p>${product.price ? Math.round(product.price) : "N/A"}</p>
        </div>
        <p className={`${categoryColor} capitalize text-sm`}>
          {product.category?.name || product.category}
        </p>
      </div>
    </Link>
  );
}
