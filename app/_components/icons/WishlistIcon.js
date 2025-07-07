"use client";
import { useWishlistStore } from "@/app/_store/wishlistStore";

export default function WishlistIcon({
  color = "black",
  product,
  showCountBadge = false,
}) {
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const isInWishlist = useWishlistStore((state) =>
    product ? state.isInWishlist(product.id) : false
  );
  const count = useWishlistStore((state) => state.items.length);

  const classes = `text-l text-${color}`;

  return (
    <div className="relative inline-flex items-center">
      <svg
        onClick={(e) => {
          if (product) {
            e.stopPropagation();
            toggleWishlist(product);
            console.log("Current wishlist:", useWishlistStore.getState().items);
          }
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill={isInWishlist ? "black" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`size-6 hover:scale-110 transition-all ${classes}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>

      {showCountBadge && count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </div>
  );
}
