import { Stack } from "@mui/material";
import ProductDetails from "../components/ProductDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Error from "../components/util/Error";
import { useProductStore } from "../stores/productStore";

const Products: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const error = useProductStore((state) => state.error);
  const products = useProductStore((state) => state.products);

  useEffect(() => {
    setProduct(products.find((product) => product.id === Number(id)));
  }, []);

  return (
    <Stack
      width="100%"
      height="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
      mt={5}
    >
      {error && <Error text={error} />}
      {product && <ProductDetails {...product} />}
    </Stack>
  );
};

export default Products;
