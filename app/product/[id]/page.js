import Accordion from "@/app/_components/Accordion";
import Wishlist from "@/app/_components/icons/Wishlist";
import QuantitySelector from "@/app/_components/QuantitySelector";
import Image from "next/image";

async function getProduct(id, apiSource) {
  if (apiSource === "escuelajs") {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Not found in escuelajs");
    return await res.json();
  }
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Not found in dummyjson");
  return await res.json();
}

export default async function ProductPage({ params, searchParams }) {
  const { id } = params;
  const apiSource = searchParams?.api || "dummyjson";

  const product = await getProduct(id, apiSource);

  const title = product.title || product.name || "Unnamed Product";
  const price = product.price ? Math.round(product.price) : "N/A";
  const category = product.category?.name || product.category || "Unknown";
  const description =
    product.description || product.details || "No description available.";
  const image =
    (Array.isArray(product.images) ? product.images[0] : product.images) ||
    product.category?.image ||
    "/placeholder.png";

  const hasSizes = ["clothes", "tops", "shirts", "dresses"].some((cat) =>
    category.toLowerCase().includes(cat)
  );

  return (
    <div className="container lg:max-w-[70%] mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-start">
        <div className="max-w-md">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="w-full max-h-[500px] object-contain shadow"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl">{title}</h1>
          <p className="text-gray-400 font-light italic capitalize">
            Category: {category}
          </p>
          <p className="text-xl text-gray-800 pb-2">${price}</p>

          <form className="w-full bg-white rounded-xl space-y-4">
            <div className="space-y-4">
              {hasSizes && (
                <>
                  <label
                    htmlFor="size"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Size<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="size"
                    id="size"
                    required
                    className="block w-full border border-black p-2 pr-6"
                  >
                    <option value="">Select size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </>
              )}
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity<span className="text-red-500">*</span>
              </label>
              <QuantitySelector id="quantity" />
            </div>
          </form>

          <div className="flex gap-2 justify-between items-center">
            <button className="flex-3/4 px-6 py-4 bg-black text-white hover:bg-gray-800 transition cursor-pointer">
              Add to Cart
            </button>
            <div className="p-4 border">
              <Wishlist />
            </div>
          </div>

          <Accordion title="Product Information">
            <p>{description}</p>
          </Accordion>
          <Accordion title="Shipping Info">
            <p>Ships worldwide within 3-7 days. Free on orders over $50.</p>
          </Accordion>
          <Accordion title="Return Policy">
            <p>30-day returns, unworn and in original packaging.</p>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
