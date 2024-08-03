import { Stack } from "@mui/material";
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
      px={8}
      py={4}
      pt={{ xs: 10, md: 4 }}
    >
      <ProductList category="all" />
    </Stack>
  );
};

export default Home;
