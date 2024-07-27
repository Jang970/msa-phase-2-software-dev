import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type ProductItemProps = {
  name: string;
  price: string;
  image: string;
  description: string;
};

const ProductItem: React.FC<ProductItemProps> = ({
  name,
  price,
  image,
  description,
}) => {
  return (
    <Card sx={{ p: 2, maxWidth: 700, borderRadius: "1rem" }}>
      <CardHeader
        title={name}
        subheader={`$${price}`}
        action={
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        }
      />
      <CardMedia component="img" height={400} image={image} />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Overview
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
