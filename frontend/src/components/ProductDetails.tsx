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
import { Product } from "../models/product";
import { useNavigate } from "react-router-dom";

const ProductDetails: React.FC<Product> = ({
  name,
  price,
  imageUrl,
  description,
}) => {
  const navigate = useNavigate();

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
        <Button fullWidth variant="contained">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductDetails;
