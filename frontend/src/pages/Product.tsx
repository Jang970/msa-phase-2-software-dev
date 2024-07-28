import { Stack } from "@mui/material";
import ProductDetails from "../components/ProductDetails";

const product = {
  image: "https://via.placeholder.com/300",
  name: "Product Name",
  price: "100",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

//todo: dynamic
const Product: React.FC = () => {
  return (
    <Stack
      width="100%"
      height="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
      mt={5}
    >
      <ProductDetails {...product} />
    </Stack>
  );
};

export default Product;
