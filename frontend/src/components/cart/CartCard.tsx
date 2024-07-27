import { Card, CardContent, Box } from "@mui/material";
import OrderSummary from "./OrderSummary";
import ProductTable from "./ProductTable";

const CartCard: React.FC = () => {
  return (
    <Card sx={{ width: "80%", borderRadius: "1rem" }}>
      <CardContent sx={{ display: "flex" }}>
        <Box flexGrow={5} sx={{ height: 500, overflow: "auto" }}>
          <ProductTable />
        </Box>
        <Box flexGrow={1}>
          <OrderSummary />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartCard;
