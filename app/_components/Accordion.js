"use client";
import { useState } from "react";

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-400">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-4 text-left"
      >
        <span className="font-medium">{title}</span>
        <span className="text-xl ">{open ? "–" : "+"}</span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-4 text-gray-700">{children}</div>
        </div>
      </div>
    </div>
  );
}
