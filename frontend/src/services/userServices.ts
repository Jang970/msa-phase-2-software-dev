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
