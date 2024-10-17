import { create } from "zustand";

const useTodoStore = create((set) => ({
    todos: [
        { id: 1, text: "할일1", done: true },
        { id: 2, text: "할일2", done: true },
        { id: 3, text: "할일3", done: false },
        { id: 4, text: "할일4", done: false },
    ],
    nextId: 5,
    createTodo: (text) => set((state) => ({
        todos: [...state.todos, { id: state.nextId, text, done: false }],
        nextId: state.nextId + 1,
    })),
    toggleTodo: (id) => set((state) => ({
        todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo)
    })),
    removeTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }))
}));

export default useTodoStore;