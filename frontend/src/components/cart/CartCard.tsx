import { Card, CardContent, Box, Typography } from "@mui/material";
import OrderSummary from "./OrderSummary";
import CartItemCard from "./CartItemCard";
import { CartItem } from "../../models/cartItem";
import Loader from "../util/Loader";

type CartCardProps = {
  cartItems: CartItem[];
  loading: boolean;
  error: string;
};

const CartCard: React.FC<CartCardProps> = ({ cartItems, loading, error }) => {
  if (loading) {
    return (
      <Box pt={10}>
        <Loader size={100} />
      </Box>
    );
  }

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
          {loading && <Loader size={100} />}
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
