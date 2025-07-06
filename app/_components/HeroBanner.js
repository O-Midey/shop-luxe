import Image from "next/image";
import menImage from "/public/men.avif";
import womenImage from "/public/women.avif";
import homeImage from "/public/home.jpg";

// Reusable SVG icon component
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={4}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
);

// Reusable component for each banner item
function HeroBannerItem({ imageSrc, altText, title, minHeightClass }) {
  return (
    <div
      className={`relative group ${minHeightClass} w-full cursor-pointer overflow-hidden`}
    >
      <Image
        fill
        src={imageSrc}
        alt={altText}
        className="object-cover transition-all duration-500 group-hover:scale-105"
      />

      {/* Sliding Black Overlay */}
      {/* This div starts at height 0 at the bottom and expands to full height on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-full bg-black opacity-0 group-hover:opacity-70 transition-all duration-500 pointer-events-none"></div>

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="flex items-center space-x-2 text-white text-2xl opacity-0 group-hover:opacity-100 transition duration-300">
          <span>{title}</span>
          <ArrowIcon /> {/* Reused SVG icon */}
        </span>
      </div>
    </div>
  );
}

export default function HeroBanner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 px-4 md:px-20 py-10">
      <HeroBannerItem
        imageSrc={menImage}
        altText="Shop Men"
        title="Shop Men"
        minHeightClass="min-h-150"
      />
      <HeroBannerItem
        imageSrc={womenImage}
        altText="Shop Women"
        title="Shop Women"
        minHeightClass="min-h-100"
      />
      <HeroBannerItem
        imageSrc={homeImage}
        altText="Shop Home"
        title="Shop Home"
        minHeightClass="min-h-100"
      />
    </div>
  );
}
