import Image from "next/image";
import Wishlist from "./icons/WishlistIcon";
import AddToCart from "./icons/AddToCart";
import Link from "next/link";

export default function ProductCard({
  product,
  theme = "light",
  source = "dummyjson",
}) {
  if (!product) return null;

  const textColor = theme === "light" ? "text-black" : "text-white";
  const categoryColor = theme === "light" ? "text-gray-500" : "text-gray-400";
  const href = `/product/${product.id}?api=${source}`;

  return (
    <div className="flex flex-col">
      <div className="relative border bg-white shadow-md group overflow-hidden w-full aspect-square">
        <Link href={href}>
          <Image
            sizes="(max-width: 1024px) 50vw, 25vw"
            src={product.images?.[0] || "/placeholder.png"}
            alt={product.title || product.name || "Product image"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-300"></div>
        </Link>

        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button className="p-2 rounded-full bg-white shadow hover:bg-gray-200 transition hover:scale-110">
            <Wishlist color="black" product={product} />
          </button>
          <button className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition hover:scale-110">
            <AddToCart product={product} />
          </button>
        </div>
      </div>

      <Link href={href}>
        <div className={`flex justify-between items-center mt-3 ${textColor}`}>
          <p className="text-sm font-medium line-clamp-1">
            {product.title || product.name || "Unnamed Product"}
          </p>
          <p>${product.price ? Math.round(product.price) : "N/A"}</p>
        </div>
        <p className={`${categoryColor} capitalize text-sm`}>
          {product.category?.name || product.category}
        </p>
      </Link>
    </div>
  );
}
