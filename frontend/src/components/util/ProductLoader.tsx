import { useEffect } from "react";
import { useProductStore } from "../../stores/productStore";

const ProductLoader: React.FC = () => {
  const fetchAllProducts = useProductStore((state) => state.fetchAllProducts);
  const isFetched = useProductStore((state) => state.isFetched);

  useEffect(() => {
    if (!isFetched) {
      fetchAllProducts();
    }
  }, [isFetched, fetchAllProducts]);

  return null;
};

export default ProductLoader;
