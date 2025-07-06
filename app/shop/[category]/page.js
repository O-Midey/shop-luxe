import ProductList from "@/app/_components/ProductList";
import {
  getAllProducts,
  getProducts as getProductsByCategory,
} from "@/app/_lib/api";

async function safeGetProducts(category) {
  const data = await getProductsByCategory(category);
  return data?.products ?? [];
}

export default async function Page({ params }) {
  const { category } = params;
  let products;

  const headings = {
    new: "New Products",
    sale: "Products on Sale",
  };

  function capitalizeWords(str) {
    return str.replace(/\b\w/g, (c) => c.toUpperCase());
  }

  let headingText =
    headings[category] || capitalizeWords(category.replace(/-/g, " "));

  if (category === "new" || category === "sale") {
    const allProductsData = await getAllProducts();
    products = allProductsData.sort(() => Math.random() - 0.5).slice(0, 15);
  } else if (category === "men") {
    const shirts = await safeGetProducts("mens-shirts");
    const shoes = await safeGetProducts("mens-shoes");
    const watches = await safeGetProducts("mens-watches");
    products = [...shirts, ...shoes, ...watches];
  } else if (category === "home") {
    const furniture = await safeGetProducts("furniture");
    const groceries = await safeGetProducts("groceries");
    const homeDecoration = await safeGetProducts("home-decoration");
    const kitchen = await safeGetProducts("kitchen-accessories");
    products = [...furniture, ...groceries, ...homeDecoration, ...kitchen];
  } else if (category === "women") {
    const beauty = await safeGetProducts("beuty");
    const fragrances = await safeGetProducts("fragrances");
    const bags = await safeGetProducts("womens-bags");
    const dresses = await safeGetProducts("womens-dresses");
    const jewellery = await safeGetProducts("womens-jewellery");
    const shoes = await safeGetProducts("womens-shoes");
    const watches = await safeGetProducts("womens-watches");

    products = [
      ...beauty,
      ...fragrances,
      ...bags,
      ...dresses,
      ...jewellery,
      ...shoes,
      ...watches,
    ];
  } else {
    const data = await getProductsByCategory(category);
    products = data?.products ?? [];
  }

  return (
    <div className="px-20 py-10 capitalize">
      <ProductList heading={headingText} products={products} />
    </div>
  );
}
