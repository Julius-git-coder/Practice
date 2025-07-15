import { create } from "zustand";

export const useStore = create((set) => ({
  users: [],
  name: "",
  edit: null,
  setName: (name) => set({ name }),
 addUsers:()=>set((state)=>{
const name = state.name.trim();
 if(!name) return{};
 const users= state.edit !==null
? state.users.map((u,i)=>i ===state.edit ? name:u)
:[...state.users,name]
 
 return {name:'',edit:null,users}
}),
  toDelete: (i) =>
    set((state) => ({ users: state.users.filter((_, x) => x !== i) })),
  editer: (i) => set((state) => ({ name: state.users[i], edit: i })),
  clearAll: () => set({ users: [], name: "", edit: null }),
}))
