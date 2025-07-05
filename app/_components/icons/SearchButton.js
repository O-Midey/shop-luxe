"use client";
import { useState } from "react";

export default function SearchButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center px-6">
          <input
            autoFocus
            type="text"
            placeholder="Search products..."
            className="w-full max-w-lg border-b border-gray-400 py-3 px-4 text-lg focus:outline-none"
          />
          <button
            onClick={() => setOpen(false)}
            className="ml-4 text-3xl text-gray-600"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
