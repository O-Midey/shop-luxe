import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],

  addToCart: (product) => {
    const exists = get().items.find((item) => item.id === product.id);
    if (exists) {
      set({
        items: get().items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({
        items: [...get().items, { ...product, quantity: 1 }],
      });
    }
  },

  removeFromCart: (id) =>
    set({
      items: get().items.filter((item) => item.id !== id),
    }),

  increaseQuantity: (id) =>
    set({
      items: get().items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }),

  decreaseQuantity: (id) =>
    set({
      items: get().items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    }),

  clearCart: () => set({ items: [] }),

  totalQuantity: () =>
    get().items.reduce((total, item) => total + item.quantity, 0),

  totalAmount: () =>
    get().items.reduce(
      (total, item) => total + item.quantity * Math.round(item.price),
      0
    ),
}));
