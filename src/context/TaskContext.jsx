import { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasksArray, setTasksArray] = useState(() => {
    const arr = localStorage.getItem("tasksArray");
    return arr ? JSON.parse(arr) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
  }, [tasksArray]);

  const addTask = (task) => setTasksArray((prev) => [...prev, task]);
  const toggleTask = (id) =>
    setTasksArray((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "complete" ? "incomplete" : "complete",
            }
          : task
      )
    );
  const updateTask = (id, key, value) =>
    setTasksArray((prev) =>
      prev.map((task) => (task.id === id ? { ...task, [key]: value } : task))
    );
  const deleteTask = (id) =>
    setTasksArray((prev) => prev.filter((task) => task.id !== id));

  return (
    <TaskContext.Provider
      value={{ tasksArray, addTask, toggleTask, updateTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);
