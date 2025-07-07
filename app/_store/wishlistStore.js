import { create } from "zustand";

export const useWishlistStore = create((set, get) => ({
  items: [],

  addToWishlist: (product) => {
    if (!product || !product.id) return;
    set((state) => ({
      items: [...state.items, product],
    }));
  },

  removeFromWishlist: (id) => {
    if (!id) return;
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },

  toggleWishlist: (product) => {
    if (!product || !product.id) return;
    const { items, removeFromWishlist, addToWishlist } = get();
    const exists = items.some((item) => item.id === product.id);
    if (exists) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  },

  isInWishlist: (id) => {
    if (!id) return false;
    return get().items.some((item) => item.id === id);
  },
}));
