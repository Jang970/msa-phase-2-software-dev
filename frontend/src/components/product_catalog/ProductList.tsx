import React from "react";
import ProductCard from "./ProductCard";
import { Box, Grid } from "@mui/material";
import { useProductStore } from "../../stores/productStore";
import Error from "../util/Error";
import Loader from "../util/Loader";

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

  if (loading) {
    return (
      <Box>
        <Loader size={100} />
      </Box>
    );
  }

  return (
    <Box flexGrow={1}>
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
