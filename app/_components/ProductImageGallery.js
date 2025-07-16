"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Spinner from "./Spinner";

export default function ProductImageGallery({ title, images }) {
  const [mainImage, setMainImage] = useState(images?.[0] || "/placeholder.png");
  const [loading, setLoading] = useState(false);

  // Show loader whenever mainImage changes
  useEffect(() => {
    setLoading(true);
  }, [mainImage]);

  // Safety: hide after max 3s if onLoadingComplete doesn't fire
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div className="max-w-md relative">
      {loading && <Spinner />}

      <Image
        src={mainImage}
        alt={title}
        width={500}
        height={500}
        className="w-full max-h-[500px] object-contain shadow transition duration-300"
        onLoadingComplete={() => setLoading(false)}
      />

      <div className="flex gap-2 mt-4">
        {images?.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setMainImage(img)}
            className={`w-16 h-16 border rounded overflow-hidden ${
              mainImage === img ? "ring-2 ring-black" : ""
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={img}
                alt={`${title} thumbnail ${idx}`}
                fill
                className="object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
