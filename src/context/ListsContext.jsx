import { createContext, useContext, useState, useEffect } from "react";

const ListsContext = createContext();
const defaultLists = [
  {
    id: crypto.randomUUID(),
    title: "Today",
    url: "/",
  },
  {
    id: crypto.randomUUID(),
    title: "Scheduled",
    url: "/scheduled",
  },
  {
    id: crypto.randomUUID(),
    title: "Important",
    url: "/important",
  },
  {
    id: crypto.randomUUID(),
    title: "All",
    url: "/all",
  },
  {
    id: crypto.randomUUID(),
    title: "Completed",
    url: "/completed",
  },
];

export function ListsProvider({ children }) {
  const [listsArray, setListsArray] = useState(() => {
    const arr = localStorage.getItem("listsArray");
    return arr ? JSON.parse(arr) : defaultLists;
  });

  useEffect(() => {
    localStorage.setItem("listsArray", JSON.stringify(listsArray));
  }, [listsArray]);

  const addList = (list) =>
    setListsArray((prev) => {
      if (
        prev.some((l) => l.title.toLowerCase() === list.title.toLowerCase())
      ) {
        return prev;
      }
      return [...prev, list];
    });

  const deleteList = (id) =>
    setListsArray((prev) => prev.filter((list) => list.id !== id));

  return (
    <ListsContext.Provider value={{ listsArray, addList, deleteList }}>
      {children}
    </ListsContext.Provider>
  );
}

export const useLists = () => useContext(ListsContext);
