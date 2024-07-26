import { Stack, Typography } from "@mui/material";
import ProductList from "../components/ProductList";

const Home: React.FC = () => {
  return (
    <Stack
      direction="column"
      width="100%"
      height="100%"
      alignItems="center"
      gap={2}
      pb={2}
      pt={4}
    >
      <ProductList />
    </Stack>
  );
};

export default Home;
