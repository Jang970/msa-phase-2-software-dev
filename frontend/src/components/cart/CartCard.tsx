import { Card, CardContent, Box, Typography } from "@mui/material";
import OrderSummary from "./OrderSummary";
import CartItemCard from "./CartItemCard";
import { useCartStore } from "../../stores/cartStore";
import { useUserStore } from "../../stores/userStore";
import { useEffect } from "react";

const CartCard: React.FC = () => {
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
    <Card sx={{ width: { xs: "90%", md: "65%" }, borderRadius: "1rem" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          flexGrow={5}
          sx={{
            height: 400,
            overflow: "auto",
            pb: 2,
          }}
        >
          {loading && <Typography>Loading...</Typography>}
          {error && <Typography>Error: {error}</Typography>}

          {cartItems.length ? (
            <>
              {cartItems.map((item) => (
                <CartItemCard key={item.id} cartItem={item} />
              ))}
            </>
          ) : (
            <Typography variant="h5" align="center" mt={6}>
              Empty!? Add Something!
            </Typography>
          )}
        </Box>
        <Box flexGrow={1}>
          <OrderSummary />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartCard;
