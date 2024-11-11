import { create } from "zustand";
import { persist } from "zustand/middleware";

const initalUser = { email: "", token: "" };

const useUserStore = create(
  persist(
    (set) => ({
      user: initalUser,
      setUser: (userInfo) => set({ user: userInfo }),
      clearUser: () => set({ user: initalUser }),
    }),
    {
      name: "USER_INFO",
    }
  )
);

export default useUserStore;
