import { create } from "zustand";

export const useWishlistStore = create((set, get) => ({
  items: [],

  addToWishlist: (product) =>
    set((state) => ({
      items: [...state.items, product],
    })),

  removeFromWishlist: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  toggleWishlist: (product) => {
    const exists = get().items.some((item) => item.id === product.id);
    if (exists) {
      get().removeFromWishlist(product.id);
    } else {
      get().addToWishlist(product);
    }
  },

  isInWishlist: (id) => get().items.some((item) => item.id === id),
}));
