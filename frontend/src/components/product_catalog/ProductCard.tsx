import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Snackbar,
  SnackbarCloseReason,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Product } from "../../models/product";
import { useCartStore } from "../../stores/cartStore";
import { useUserStore } from "../../stores/userStore";
import { useState } from "react";
import useSnackbar from "../../hooks/useSnackbar";

const ProductCard: React.FC<Product> = ({ id, imageUrl, name, price }) => {
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addItem);
  const user = useUserStore((state) => state.user);
  const { open, handleOpen, handleClose } = useSnackbar();

  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  const handleAddToCart = () => {
    if (user) {
      addToCart(user.id, id, 1);
      handleOpen();
    }
  };

  return (
    <Card sx={{ borderRadius: "0.25rem" }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          height={250}
          component="img"
          image={imageUrl}
          alt="product-image"
        />
        <CardContent>
          <Typography variant="h5" gutterBottom component="div">
            {name}
          </Typography>
          <Typography variant="body1">${price}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          sx={{ m: 1 }}
          onClick={handleAddToCart}
        >
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

export default ProductCard;
