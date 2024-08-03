import { create } from "zustand";
import { Product } from "../models/product";
import { getProducts } from "../services/productServices";

type ProductStore = {
  products: Product[];
  filteredProducts: Product[];
  error: string;
  loading: boolean;
  isFetched: boolean;
  fetchAllProducts: () => Promise<void>;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  filteredProducts: [],
  error: "",
  loading: false,
  isFetched: false,
  fetchAllProducts: async () => {
    set({ loading: true });
    try {
      const data = await getProducts();
      set({ products: data, filteredProducts: data, isFetched: true });
    } catch (err) {
      set({ error: "Error fetching products." });
    } finally {
      set({ loading: false });
    }
  },
}));
