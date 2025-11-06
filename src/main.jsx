import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TaskProvider } from "./context/TaskContext.jsx";
import { ListsProvider } from "./context/ListsContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListsProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </ListsProvider>
  </StrictMode>
);
