import { CartItem } from "./cartItem";

export type Cart = {
  id: number;
  userId: number;
  cartItems: CartItem[];
};
