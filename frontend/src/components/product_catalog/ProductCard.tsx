import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type ProductCardProps = {
  image: string;
  name: string;
  price: string;
};

// todo: will be dynamic and accept props
const ProductCard: React.FC<ProductCardProps> = ({ image, name, price }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          height={250}
          component="img"
          image={image}
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
