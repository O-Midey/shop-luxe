import Image from "next/image";
import menImage from "/public/men.avif";
import womenImage from "/public/women.avif";
import homeImage from "/public/home.jpg";
import Link from "next/link";

// SVG icon
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

function HeroBannerItem({ imageSrc, altText, title, aspect, href }) {
  return (
    <Link href={href}>
      <div
        className={`relative group ${aspect} w-full cursor-pointer overflow-hidden`}
      >
        <Image
          fill
          src={imageSrc}
          alt={altText}
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />

        {/* Always-on overlay, darker for mobile */}
        <div
          className="
            absolute inset-0 
            bg-black/40 md:bg-black/20 
            group-hover:bg-black/60 
            transition duration-500
            pointer-events-none
          "
        ></div>

        {/* Text: visible always on mobile, only on hover for desktop */}
        <div
          className="
            absolute inset-0 flex items-center justify-center pointer-events-none
          "
        >
          <span
            className="
            flex items-center space-x-2 text-white text-2xl drop-shadow-lg
            opacity-100 md:opacity-0 md:group-hover:opacity-100
            transition duration-300
          "
          >
            <span>{title}</span>
            <ArrowIcon />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function HeroBanner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 px-4 md:px-20 py-10">
      <HeroBannerItem
        href="/shop/men"
        imageSrc={menImage}
        altText="Shop Men"
        title="Shop Men"
        aspect="aspect-[4/5]"
      />
      <HeroBannerItem
        href="/shop/women"
        imageSrc={womenImage}
        altText="Shop Women"
        title="Shop Women"
        aspect="aspect-[4/5]"
      />
      <HeroBannerItem
        href="/shop/home"
        imageSrc={homeImage}
        altText="Shop Home"
        title="Shop Home"
        aspect="aspect-[4/5]"
      />
    </div>
  );
}
