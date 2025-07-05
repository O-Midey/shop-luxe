import { categoryData } from "./_lib/data";
import Image from "next/image";

function shuffleArray(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const categories = shuffleArray(categoryData).slice(0, 10);

export default function Categories() {
  return (
    <section className="w-full bg-white text-black px-0 py-10">
      <h2 className="text-2xl mb-8 text-center py-25">CATEGORIES</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {categories.map(({ category, image }) => (
          <div
            key={category.slug}
            className="relative w-full aspect-square group overflow-hidden bg-gray-100 shadow-md border border-gray-200"
          >
            <Image
              src={image}
              alt={category.name}
              fill
              sizes="(max-width: 768px) 50vw, 20vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
              <h3 className="text-white text-center font-semibold px-2">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
