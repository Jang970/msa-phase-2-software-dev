import { Card, CardContent, Box } from "@mui/material";
import OrderSummary from "./OrderSummary";
import ProductTable from "./ProductTable";
import CartItemCard from "./CartItemCard";

const CartCard: React.FC = () => {
  return (
    <Card sx={{ width: { xs: "90%", md: "65%" }, borderRadius: "1rem" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          flexGrow={5}
          sx={{
            height: 400,
            overflow: "auto",
            pb: 2,
          }}
        >
          <CartItemCard />
          <CartItemCard />
          <CartItemCard />
          <CartItemCard />
          <CartItemCard />
          <CartItemCard />
          <CartItemCard />
        </Box>
        <Box flexGrow={1}>
          <OrderSummary />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartCard;
