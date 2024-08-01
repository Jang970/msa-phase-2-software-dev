import { Alert, Stack } from "@mui/material";
import ProductDetails from "../components/ProductDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "../models/product";
import { getProductById } from "../services/productServices";
import Error from "../components/util/Error";

// const product = {
//   image: "https://via.placeholder.com/300",
//   name: "Product Name",
//   price: "100",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// };

//todo: dynamic
const Products: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(Number(id));
        setProduct(data);
      } catch (err) {
        setError("Error fetching product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
