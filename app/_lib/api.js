export async function getProducts() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching products:", err);
  }
}

// export async function getCategories() {
//   try {
//     const res = await fetch("https://dummyjson.com/products/categories", {
//       cache: "no-store",
//     });
//     const categories = await res.json();

//     const categoriesWithImages = await Promise.all(
//       categories.map(async (category) => {
//         const res = await fetch(
//           `https://dummyjson.com/products/category/${category.slug}`,
//           {
//             cache: "no-store",
//           }
//         );
//         const data = await res.json();
//         const image = data.products?.[0]?.images?.[0] ?? null;
//         console.log(`Category: ${category.slug}, Image: ${image}`);
//         return { category, image };
//       })
//     );

//     return categoriesWithImages;
//   } catch (err) {
//     console.error("Error fetching categories with images", err);
//     return [];
//   }
// }
