import axios from "axios";
import { API_URL } from "./apiUrl";

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/api/Product`);
  return response.data;
};

export const getProductById = async (id: number) => {
  const response = await axios.get(`${API_URL}/api/Product/${id}`);
  return response.data;
};
