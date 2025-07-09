"use client";
import Link from "next/link";
import { useCartStore } from "@/app/_store/cartStore";
import Image from "next/image";

export default function CartPage() {
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalAmount,
  } = useCartStore();

  console.log(items);
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 mb-4">
            Your cart is currently empty. Add some items now 😉
          </p>
          <Link href="/" className="underline text-black hover:text-blue-400">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div className="flex items-center align-middle gap-6">
                <Image
                  alt={item.name}
                  href={item.image || "/placeholder.png"}
                  width={50}
                  height={50}
                />

                <p>{item.title || item.name}</p>
                <p className="text-gray-500">
                  ${Math.round(item.price)} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 py-1 border border-gray-500"
                >
                  -
                </button>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-2 py-1 border"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-3 py-1 bg-black text-white"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 text-xl font-bold">Total: ${totalAmount()}</div>
        </>
      )}
    </div>
  );
}
