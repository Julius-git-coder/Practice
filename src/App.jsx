// App.jsx
import React from "react";
import { useStore } from "./store/useStore";
import { motion } from "framer-motion";
const App = () => {
  const { users, name, edit, setName, addUsers, toDelete, editer, clearAll } =
    useStore();
const variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

  return (
    <div className="flex justify-center mt-10">
      <div className="w-[30rem] border p-5">
        <h1 className="font-black text-center text-xl mb-4">
          {edit ? "Updating" : "CRUD"}
        </h1>

        <div className="flex mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // ✅
            placeholder="Enter text"
            className="border w-full text-center p-1"
          />
          <button
            onClick={addUsers}
            className={`ml-2 ${
              edit !== null ? "bg-green-500" : "bg-blue-500"
            } text-white px-3 rounded`}
          >
            {edit ? "Save" : "Add"}
          </button>
        </div>

        <ul className="space-y-2">
          {users.map((user, i) => (
            <motion.li
              variants={variants}
              initial="initial"
              animate="animate"
              key={i}
              className="flex justify-between items-center"
            >
              <h1>{user}</h1>
              <div>
                <button
                  onClick={() => editer(i)}
                  className="text-blue-500 mr-4"
                >
                  Edit
                </button>
                <button onClick={() => toDelete(i)} className="text-red-500">
                  Delete
                </button>
              </div>
            </motion.li>
          ))}
        </ul>

        <button
          onClick={clearAll}
          className="mt-6 w-full bg-red-100 text-red-700 py-1 rounded"
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default App;
