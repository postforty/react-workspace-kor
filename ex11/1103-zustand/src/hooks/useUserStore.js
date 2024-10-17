const { create } = require("zustand");

const useUserStore = create((set) => ({
    users: [
        {
            id: 1,
            username: '오일남',
            email: 'o1@example.com',
            active: false
        },
        {
            id: 2,
            username: '오이남',
            email: 'o2@example.com',
            active: false
        },
        {
            id: 3,
            username: '오삼남',
            email: 'o3@example.com',
            active: false
        },
    ],
    // createUser: (user) => set((state) => ({users: state.users.concat(user)})),
    createUser: (user) => set((state) => ({ users: [...state.users, user] })),
    toggleUser: (id) => set((state) => ({ users: state.users.map((user) => user.id === id ? { ...user, active: !user.active } : user) })),
    removeUser: (id) => set((state) => ({ users: state.users.filter((user) => user.id !== id) }))
}));

export default useUserStore;