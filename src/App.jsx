import { Header } from "./components/Header";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "./components/ui/sidebar";
import { AppSidebar } from "./components/Sidebar";
import { NewTask } from "./components/NewTask";
import { TaskList } from "./components/TasksList";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <main>
            <SidebarTrigger className="hidden sm:block" />
            <NewTask />
            <TaskList list="Today" />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default App;
