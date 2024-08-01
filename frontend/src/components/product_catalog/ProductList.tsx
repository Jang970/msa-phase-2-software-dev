import React from "react";
import ProductCard from "./ProductCard";
import { Box, Grid, Typography } from "@mui/material";
import { useProductStore } from "../../stores/productStore";
import Error from "../util/Error";

type ProductListProps = {
  category: string;
};

const ProductList: React.FC<ProductListProps> = ({ category }) => {
  const products = useProductStore((state) => state.products);
  const error = useProductStore((state) => state.error);
  const loading = useProductStore((state) => state.loading);

  const displayedProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <Box flexGrow={1}>
      {loading && <Typography variant="h6">Loading...</Typography>}
      {error && <Error text={error} />}
      <Grid container spacing={3}>
        {displayedProducts.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
