import axios from "axios";

const API_URL = "http://localhost:5221";

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/api/Product`);
  return response.data;
};

export const getProductById = async (id: number) => {
  const response = await axios.get(`${API_URL}/api/Product/${id}`);
  return response.data;
};
