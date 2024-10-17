import { create } from "zustand";
import {
  fetchTodos,
  toggleTodo,
  removeTodo,
  createTodo,
} from "../services/api";

const handleApiCall = async (set, apiFunction, onSuccess) => {
  set({ loading: true, error: null });
  try {
    const result = await apiFunction();
    if (onSuccess) onSuccess(result); // onSuccess가 null, undefined가 아닌 경우 실행
  } catch (error) {
    set({ error: error.message });
  } finally {
    set({ loading: false });
  }
};

const useTodoStore = create((set) => ({
  todos: [],
  loading: false,
  error: null,

  setTodos: (todos) => set({ todos }),

  loadTodos: async () => {
    await handleApiCall(set, fetchTodos, (todos) => set({ todos }));
  },

  handleToggleTodo: async (id, done) => {
    await handleApiCall(
      set,
      () => toggleTodo(id, done),
      () => useTodoStore.getState().loadTodos()
    );
  },

  handleRemoveTodo: async (id) => {
    await handleApiCall(
      set,
      () => removeTodo(id),
      () => useTodoStore.getState().loadTodos()
    );
  },

  handleCreateTodo: async (text, creationDate, dueDate) => {
    await handleApiCall(
      set,
      () => createTodo(text, creationDate, dueDate),
      () => useTodoStore.getState().loadTodos()
    );
  },
}));

export default useTodoStore;
