import { Product } from "./product";

export type CartItem = {
  id: number;
  cartId: number;
  productId: number;
  quantity: number;
  product: Product;
};
