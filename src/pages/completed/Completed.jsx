import { useTasks } from "../../context/TaskContext";
import { Task } from "../../components/Task";
import { SidebarTrigger } from "../../components/ui/sidebar";

export function Completed() {
  const { tasksArray } = useTasks();

  const filtered = tasksArray.filter((task) => task.status === "complete");

  return (
    <>
      <div className="flex content-center gap-1 mb-4">
        <SidebarTrigger className="sidebar-trigger" />
        <h1 className="text-3xl font-semibold">Completed</h1>
      </div>
      <div className="my-4 space-y-2">
        {filtered.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}
