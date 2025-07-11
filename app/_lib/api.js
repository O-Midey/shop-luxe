// export async function getProducts(category) {
//   if (!category  || category === "name" || category === "sale") {
//     try {
//       const res = await fetch("https://api.escuelajs.co/api/v1/products", {
//         cache: "no-store",
//       });
//       const data = await res.json();
//       return data;
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     }
//   }

//   if (category) {
//     try {
//       const res = await fetch(
//         `https://dummyjson.com/products/category/${category}`,
//         {
//           cache: "no-store",
//         }
//       );
//       const data = await res.json();
//       return data;
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     }
//   }
// }

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

export async function getProducts(category) {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
}

export async function getAllProducts() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();

    // Filter out products with category.name === "Testing Category API"
    const filtered = data.filter(
      (product) => product.category?.name !== "Testing Category API"
    );

    return filtered;
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
}
