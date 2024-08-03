import { Stack, Typography } from "@mui/material";
import CartCard from "../components/cart/CartCard";
import { useEffect } from "react";
import { useCartStore } from "../stores/cartStore";
import { useUserStore } from "../stores/userStore";

const Cart: React.FC = () => {
  const fetchCart = useCartStore((state) => state.fetchCart);
  const cartItems = useCartStore((state) => state.cartItems || []);
  const loading = useCartStore((state) => state.loading);
  const error = useCartStore((state) => state.error);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (user && user.id) {
      fetchCart(user.id);
    }
  }, [user, fetchCart]);

  return (
    <Stack
      height="100%"
      direction="column"
      width="100%"
      alignItems="center"
      justifyContent="center"
      spacing={1}
      pt={{ xs: 8, md: 2 }}
    >
      <Typography variant="h3">Your Cart</Typography>
      <CartCard cartItems={cartItems} loading={loading} error={error} />
    </Stack>
  );
};

export default Cart;
