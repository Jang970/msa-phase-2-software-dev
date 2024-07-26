import React from "react";
import ProductCard from "./ProductCard";
import { Stack } from "@mui/material";
import { grey } from "@mui/material/colors";

//todo: will be dynamic based on the current page
//todo: will also have to take list of products and divide into groups of 4, grid component is unstable
const ProductList: React.FC = () => {
  return (
    <Stack
      direction="column"
      width="80%"
      gap={4}
      p={4}
      borderRadius="0.5rem"
      sx={{
        backgroundColor: grey[50],
      }}
    >
      <Stack direction="row" gap={4} justifyContent="space-around">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Stack>
      <Stack direction="row" gap={4} justifyContent="space-around">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Stack>
    </Stack>
  );
};

export default ProductList;
