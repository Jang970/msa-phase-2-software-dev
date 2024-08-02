import axios from "axios";
import { User } from "../models/user";
import { API_URL } from "./apiUrl";

export const getUser = async (username: string) => {
  const response = await axios.get(`${API_URL}/api/User/${username}`);

  return response.data;
};

export const createUser = async (user: User) => {
  const response = await axios.post(`${API_URL}/api/User`, user);
  return response.data;
};

export const updateUser = async (user: User) => {
  const response = await axios.put(`${API_URL}/api/User`, user);
  return response.data;
};

export const deleteUser = async (userId: number) => {
  const response = await axios.delete(`${API_URL}/api/User/${userId}`);
  return response.data;
};
