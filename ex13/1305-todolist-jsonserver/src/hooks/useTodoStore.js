import { create } from "zustand";

const useTodoStore = create((set) => ({
    todos: [],
    setTodos: (todos) => set({ todos })
}));

export default useTodoStore;