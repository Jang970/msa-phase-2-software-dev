import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import ProductTable from "../components/cart/ProductTable";
import OrderSummary from "../components/cart/OrderSummary";

//todo: dynamic
const Cart: React.FC = () => {
  const itemCount = 1;
  return (
    <Stack
      height="100%"
      direction="column"
      width="100%"
      alignItems="center"
      justifyContent="center"
      pt={2}
      spacing={4}
    >
      <Typography variant="h3">Your Cart has {itemCount} Items</Typography>
      <Cart />
    </Stack>
  );
};

export default Cart;
