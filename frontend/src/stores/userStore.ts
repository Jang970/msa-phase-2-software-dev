import { create } from "zustand";
import { User } from "../models/user";
import { createUser, getUser } from "../services/userServices";
import axios from "axios";

type UserStore = {
  user: User | null;
  error: string;
  loading: boolean;
  fetchUser: (username: string) => Promise<void>;
  createUser: (user: User) => Promise<void>;
  logout: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "null"),
  error: "",
  loading: false,

  fetchUser: async (username: string) => {
    set({ loading: true, error: "" });
    try {
      const data = await getUser(username);
      localStorage.setItem("user", JSON.stringify(data));
      set({ user: data });
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const errorMessage =
          err.response && err.response.status === 404
            ? "User not found."
            : "Error fetching user.";
        set({ error: errorMessage });
      } else {
        set({ error: "An unexpected error occurred." });
      }
    } finally {
      set({ loading: false });
    }
  },

  createUser: async (user: User) => {
    set({ loading: true, error: "" });
    try {
      const data = await createUser(user);
      const newUser = data.result;
      localStorage.setItem("user", JSON.stringify(newUser));
      set({ user: newUser });
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const errorMessage =
          err.response && err.response.status === 400
            ? "User already exists."
            : "Error creating user.";
        set({ error: errorMessage });
      } else {
        set({ error: "An unexpected error occurred." });
      }
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    localStorage.removeItem("user");
    console.log("user logged out!");
    set({ user: null });
  },
}));
