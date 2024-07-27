import { Stack, Typography } from "@mui/material";
import ProductList from "../components/product_catalog/ProductList";

const Home: React.FC = () => {
  return (
    <Stack
      direction="column"
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
      gap={2}
      p={8}
    >
      <ProductList />
    </Stack>
  );
};

export default Home;
