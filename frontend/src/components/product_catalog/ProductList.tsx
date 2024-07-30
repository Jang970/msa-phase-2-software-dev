import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Box, Grid } from "@mui/material";
import { getProducts } from "../../services/productServices";
import { Product } from "../../models/product";

const product = {
  image: "https://via.placeholder.com/300",
  name: "Product Name",
  price: "100",
};

const products = Array.from({ length: 8 }, () => product);

//todo: will be dynamic based on the current page i.e home, shirts, pants, jackets, hats
const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        console.log(data);
        setProducts(data);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box flexGrow={1}>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <ProductCard
              image={product.imageUrl}
              name={product.name}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
