import axios from "axios";
import { API_URL } from "./apiUrl";

export const getCart = async (userId: number) => {
  const response = await axios.get(`${API_URL}/api/Cart/${userId}`);
  return response.data;
};

export const addToCart = async (
  userId: number,
  productId: number,
  quantity: number = 1
) => {
  const response = await axios.post(`${API_URL}/api/Cart/${userId}/add`, {
    productId,
    quantity,
  });
  return response.data;
};

export const removeFromCart = async (userId: number, productId: number) => {
  const response = await axios.delete(
    `${API_URL}/api/Cart/${userId}/remove/${productId}`
  );
  return response.data;
};

export const updateCartItem = async (
  userId: number,
  productId: number,
  quantity: number
) => {
  const response = await axios.put(`${API_URL}/api/Cart/${userId}/update`, {
    productId,
    quantity,
  });
  return response.data;
};

export const clearCart = async (userId: number) => {
  const response = await axios.delete(`${API_URL}/api/Cart/${userId}/clear`);
  return response.data;
};
