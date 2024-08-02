import {
  Stack,
  Box,
  Typography,
  Divider,
  Button,
  Snackbar,
} from "@mui/material";
import { useCartStore } from "../../stores/cartStore";
import { useUserStore } from "../../stores/userStore";
import useSnackbar from "../../hooks/useSnackbar";

const OrderSummary: React.FC = () => {
  const cartItems = useCartStore((state) => state.cartItems || []);
  const clearCart = useCartStore((state) => state.clearCart);
  const user = useUserStore((state) => state.user);
  const { open, handleOpen, handleClose } = useSnackbar();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.quantity * item.product.price, 0)
    .toFixed(2);

  const handleClearCart = () => {
    if (user) {
      clearCart(user.id);
      handleOpen();
    }
  };

  return (
    <Stack height="100%" p={2} justifyContent="center">
      <Box
        flexGrow={1}
        sx={{ display: "flex", gap: 1, flexDirection: "column" }}
      >
        <Typography variant="h4" gutterBottom>
          Order Summary
        </Typography>
        <Divider sx={{ width: "90%" }} />
        <Typography variant="h6">Items: {totalItems}</Typography>
      </Box>

      <Box mt={2} sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
        <Typography>Total: ${totalPrice}</Typography>
        <Button
          variant="contained"
          onClick={handleClearCart}
          disabled={cartItems.length === 0}
        >
          Checkout
        </Button>
      </Box>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message="Checked out! Thanks!"
      />
    </Stack>
  );
};

export default OrderSummary;
