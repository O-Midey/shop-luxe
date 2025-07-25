import { getProduct } from "@/app/_lib/getAllProduct";
import Accordion from "@/app/_components/Accordion";
import Wishlist from "@/app/_components/icons/WishlistIcon";
import QuantitySelector from "@/app/_components/QuantitySelector";
import Image from "next/image";
import ProductImageGallery from "@/app/_components/ProductImageGallery";

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  const title = product.title || "Unnamed Product";
  const price = product.price ? Math.round(product.price) : "N/A";
  const category = product.category || "Unknown";
  const description = product.description || "No description available.";
  const images = Array.isArray(product.images)
    ? product.images
    : [product.thumbnail || "/placeholder.png"];
  const mainImage = images[0];

  const hasSizes = ["clothes", "tops", "shirts", "dresses"].some((cat) =>
    category.toLowerCase().includes(cat)
  );

  return (
    <div className="container lg:max-w-[70%] mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-start">
        <ProductImageGallery title={title} images={images} />

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
              <Wishlist product={product} />
            </div>
          </div>

          <div>
            <Accordion title="Product Information">
              <p>{description}</p>
            </Accordion>
            <Accordion title="Return & Refund Policy">
              <p>
                We want you to be completely satisfied with your purchase. If
                you’re not happy, return it within <strong>30 days</strong> for
                a full refund or exchange.
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Items must be unworn, unwashed, and in original packaging.
                </li>
                <li>
                  Refunds within 5-7 business days after we receive your return.
                </li>
                <li>
                  Return shipping is on the customer unless item was defective.
                </li>
              </ul>
              <p>
                To start a return, contact{" "}
                <a
                  href="mailto:support@example.com"
                  className="text-blue-600 underline"
                >
                  support@example.com
                </a>
                .
              </p>
            </Accordion>
            <Accordion title="Shipping Info">
              <p>
                We offer <strong>fast & reliable shipping worldwide.</strong>{" "}
                Orders processed within 1-2 business days.
              </p>
              <ul className="list-disc list-inside">
                <li>Standard shipping: 3-7 business days.</li>
                <li>Express shipping: 1-3 business days.</li>
                <li>Free shipping on orders over $50.</li>
              </ul>
              <p>
                Once your order ships, you’ll receive tracking info by email.
              </p>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
