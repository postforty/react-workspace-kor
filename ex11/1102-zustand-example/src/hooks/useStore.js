import { create } from "zustand";

const useStore = create((set) => ({
    theme: "light",
    toggleTheme: () => {
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" }))
    }
}));

// export {useStore}; // 가능
export default useStore;