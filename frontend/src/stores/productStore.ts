import { create } from "zustand";
import { Product } from "../models/product";
import { getProducts } from "../services/productServices";

type ProductStore = {
  products: Product[];
  error: string;
  loading: boolean;
  fetchAllProducts: () => Promise<void>;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  error: "",
  loading: true,
  fetchAllProducts: async () => {
    try {
      const data = await getProducts();
      set({ products: data });
    } catch (err) {
      set({ error: "Error fetching products." });
    } finally {
      set({ loading: false });
    }
  },
}));
