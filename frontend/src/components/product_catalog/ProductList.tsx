import React from "react";
import ProductCard from "./ProductCard";
import { Box, Grid } from "@mui/material";

const product = {
  image: "https://via.placeholder.com/300",
  name: "Product Name",
  price: "100",
};

const products = Array.from({ length: 8 }, () => product);

//todo: will be dynamic based on the current page i.e home, shirts, pants, jackets, hats
const ProductList: React.FC = () => {
  return (
    <Box flexGrow={1}>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
