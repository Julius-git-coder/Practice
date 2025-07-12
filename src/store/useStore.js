import { create } from "zustand";

export const useStore = create((set) => ({
  users: [],
  name: "",
  edit: null,
  setName: (name) => set({ name }),
  addUser: () =>
    set((s) =>s.name.trim()? {users:
              s.edit !== null
                ? s.users.map((u, i) => (i === s.edit ? s.name : u))
                : [...s.users, s.name],
            name: "",
            edit: null,
          }
        : {}
    ),
  toDelete: (i) => set((s) => ({ users: s.users.filter((_, x) => x !== i) })),
  editer: (i) => set((s) => ({ name: s.users[i], edit: i })),
  clearAll: () => set({ users: [], name: "", edit: null }),
}));
