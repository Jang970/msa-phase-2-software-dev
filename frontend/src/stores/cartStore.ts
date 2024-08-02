import { create } from "zustand";
import {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
  updateCartItem,
} from "../services/cartServices";

import { CartItem } from "../models/cartItem";

type CartStore = {
  cartItems: CartItem[];
  loading: boolean;
  error: string;
  fetchCart: (userId: number) => Promise<void>;
  addItem: (
    userId: number,
    productId: number,
    quantity: number
  ) => Promise<void>;
  updateItem: (
    userId: number,
    productId: number,
    quantity: number
  ) => Promise<void>;
  removeItem: (userId: number, productId: number) => Promise<void>;
  clearCart: (userId: number) => Promise<void>;
};

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  loading: false,
  error: "",
  fetchCart: async (userId: number) => {
    set({ loading: true });
    try {
      const data = await getCart(userId);
      set({ cartItems: data.cartItems, loading: false });
    } catch (err) {
      set({ error: "Error fetching cart", loading: false });
    }
  },
  addItem: async (userId: number, productId: number, quantity: number) => {
    set({ loading: true });
    try {
      await addToCart(userId, productId, quantity);
      const updatedCart = await getCart(userId);
      set({ cartItems: updatedCart.cartItems, loading: false });
    } catch (err) {
      set({ error: "Error adding item to cart", loading: false });
    }
  },
  updateItem: async (userId: number, productId: number, quantity: number) => {
    set({ loading: true });
    try {
      await updateCartItem(userId, productId, quantity);
      const updatedCart = await getCart(userId);
      set({ cartItems: updatedCart.cartItems, loading: false });
    } catch (err) {
      set({ error: "Error updating cart item", loading: false });
    }
  },
  removeItem: async (userId: number, productId: number) => {
    set({ loading: true });
    try {
      await removeFromCart(userId, productId);
      const updatedCart = await getCart(userId);
      set({ cartItems: updatedCart.cartItems, loading: false });
    } catch (err) {
      set({ error: "Error removing cart item", loading: false });
    }
  },
  clearCart: async (userId: number) => {
    set({ loading: true });
    try {
      await clearCart(userId);
      set({ cartItems: [], loading: false });
    } catch (err) {
      set({ error: "Error clearing cart", loading: false });
    }
  },
}));
