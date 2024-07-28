import { Stack, Typography } from "@mui/material";
import CartCard from "../components/cart/CartCard";

//todo: dynamic
const Cart: React.FC = () => {
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
      <CartCard />
    </Stack>
  );
};

export default Cart;
