import { create } from "zustand";
import { User } from "../models/user";
import { createUser, getUser } from "../services/userServices";
import axios from "axios";

type UserStore = {
  user: User | undefined;
  error: string;
  loading: boolean;
  fetchUser: (username: string) => Promise<void>;
  createUser: (user: User) => Promise<void>;
};

export const useUserStore = create<UserStore>((set) => ({
  user: undefined,
  error: "",
  loading: false,
  fetchUser: async (username: string) => {
    try {
      set({ loading: true });
      const data = await getUser(username);
      set({ user: data });
      console.log("user fetched!", data);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response && err.response.status === 404) {
          set({ error: "User not found." });
        } else {
          set({ error: "Error fetching user." });
        }
      }
    } finally {
      set({ loading: false });
    }
  },
  createUser: async (user: User) => {
    try {
      set({ loading: true });
      const newUser = await createUser(user);
      set({ user: newUser });
      console.log("new user made!", newUser);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response && err.response.status === 400) {
          set({ error: "User already exists." });
        } else {
          set({ error: "Error creating user." });
        }
      }
    } finally {
      set({ loading: false });
    }
  },
}));
