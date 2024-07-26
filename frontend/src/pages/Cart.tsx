import { Box, Stack, Typography } from "@mui/material";
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
      pt={2}
    >
      <Typography variant="h3">Your Cart has {itemCount} Items</Typography>

      {
        // cart component
      }
      <Stack width="80%" direction="row" bgcolor="yellow" mt={2}>
        <Box flexGrow={3}>
          <ProductTable />
        </Box>
        <Box flexGrow={1}>
          <OrderSummary />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Cart;
