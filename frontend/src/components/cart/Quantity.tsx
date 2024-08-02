import { Box, IconButton, TextField } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useUserStore } from "../../stores/userStore";
import { useCartStore } from "../../stores/cartStore";

type QuantityProps = {
  quantity: number;
  productId: number;
};

const Quantity: React.FC<QuantityProps> = ({ quantity, productId }) => {
  const updateCartItem = useCartStore((state) => state.updateItem);
  const user = useUserStore((state) => state.user);

  const handleIncrease = () => {
    if (user) {
      updateCartItem(user.id, productId, quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (user && quantity > 1) {
      updateCartItem(user.id, productId, quantity - 1);
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={1} justifyContent="center">
      <IconButton onClick={handleDecrease}>
        <RemoveIcon />
      </IconButton>
      <Box>{quantity}</Box>
      <IconButton onClick={handleIncrease}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default Quantity;
