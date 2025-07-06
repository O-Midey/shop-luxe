"use client";
import { useState } from "react";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className=" border p-1.5 md:max-w-[40%] flex  justify-between items-center space-x-3">
      <button
        type="button"
        onClick={decrement}
        className="w-8 h-8 cursor-pointer text-gray-600 hover:text-black flex items-center justify-center"
      >
        –
      </button>
      <span className="text-md">{quantity}</span>
      <button
        type="button"
        onClick={increment}
        className="w-8 h-8 cursor-pointer text-gray-600 hover:text-black flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
}
