import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Product } from "../models/product";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";
import { useUserStore } from "../stores/userStore";
import useSnackbar from "../hooks/useSnackbar";

const ProductDetails: React.FC<Product> = ({
  id,
  name,
  price,
  imageUrl,
  description,
}) => {
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addItem);
  const user = useUserStore((state) => state.user);
  const { open, handleOpen, handleClose } = useSnackbar();

  const handleAddToCart = () => {
    if (user) {
      addToCart(user.id, id, 1);
      handleOpen();
    }
  };

  return (
    <Card
      sx={{ p: 2, maxWidth: 700, borderRadius: "1rem", mt: { xs: 8, md: 0 } }}
    >
      <CardHeader
        title={name}
        subheader={`$${price}`}
        action={
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
        }
      />
      <CardMedia component="img" height={400} image={imageUrl} />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Overview
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardActions>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        message="Added item to cart!"
      />
    </Card>
  );
};

export default ProductDetails;
