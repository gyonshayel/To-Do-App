import { createContext, useContext, useState, useEffect } from "react";
import {
  Today,
  Scheduled,
  All,
  Important,
  Completed,
} from "../components/ui/sidebar-icons";

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

  const addList = (list) => setListsArray((prev) => [...prev, list]);

  const deleteList = (title) =>
    setListsArray((prev) => prev.filter((list) => list.title !== title));

  return (
    <ListsContext.Provider value={{ listsArray, addList, deleteList }}>
      {children}
    </ListsContext.Provider>
  );
}

export const useLists = () => useContext(ListsContext);
