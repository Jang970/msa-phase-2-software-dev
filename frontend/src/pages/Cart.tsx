import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Item from "../components/cart/Item";
import Quantity from "../components/cart/Quantity";
import ProductTable from "../components/cart/ProductTable";

//todo: dynamic
const Cart: React.FC = () => {
  const itemCount = 1;
  return (
    <Stack
      bgcolor="tomato"
      height="100%"
      direction="column"
      width="100%"
      alignItems="center"
    >
      <Typography variant="h3">Your Cart has {itemCount} Items</Typography>

      {
        // cart component
      }

      <Stack width="80%" direction="row" bgcolor="yellow">
        <Box flexGrow={3}>
          <ProductTable />
        </Box>
        <Box flexGrow={1} bgcolor="beige">
          <Typography>Order Summary go here</Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Cart;
