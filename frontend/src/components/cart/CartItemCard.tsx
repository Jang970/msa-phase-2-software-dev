import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import Quantity from "./Quantity";
import DeleteIcon from "@mui/icons-material/Delete";
import { grey } from "@mui/material/colors";
import { CartItem } from "../../models/cartItem";
import { useCartStore } from "../../stores/cartStore";
import { useUserStore } from "../../stores/userStore";

type CartItemCardProps = {
  cartItem: CartItem;
};

const CartItemCard: React.FC<CartItemCardProps> = ({ cartItem }) => {
  const theme = useTheme();
  const removeItem = useCartStore((state) => state.removeItem);
  const user = useUserStore((state) => state.user);
  const backgroundColor = theme.palette.mode === "light" ? grey[50] : grey[900];

  const handleRemove = () => {
    if (user) {
      removeItem(user.id, cartItem.productId);
    }
  };

  return (
    <Card sx={{ mt: 2, backgroundColor }}>
      <CardContent>
        <Box display="flex" flexDirection="row" gap={2}>
          <CardMedia
            component="img"
            src={cartItem.product.imageUrl}
            sx={{ height: { xs: 75, md: 100 }, width: { xs: 75, md: 100 } }}
          />
          <Box>
            <Typography variant="h6">{cartItem.product.name}</Typography>
            <Typography variant="body2">${cartItem.product.price}</Typography>
            <Box display="flex">
              <Quantity
                quantity={cartItem.quantity}
                productId={cartItem.productId}
              />
              <IconButton onClick={handleRemove}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartItemCard;
