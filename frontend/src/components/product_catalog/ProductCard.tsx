import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Product } from "../../models/product";

// todo: will be dynamic and accept props
const ProductCard: React.FC<Product> = ({ id, imageUrl, name, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`);
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
        <Button fullWidth variant="contained" sx={{ m: 1 }}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
