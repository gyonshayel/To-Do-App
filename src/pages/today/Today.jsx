import { useTasks } from "../../context/TaskContext";
import { Task } from "../../components/Task";
import { NewTask } from "../../components/NewTask";
import { SidebarTrigger } from "../../components/ui/sidebar";

export function Today() {
  const { tasksArray } = useTasks();
  const today = new Date();

  const filtered = tasksArray
    .filter(
      (task) =>
        new Date(task.dateCreated).toISOString().split("T")[0] ===
        today.toISOString().split("T")[0]
    )
    .sort((a, b) => {
      // Put important tasks before not important ones
      if (a.important === b.important) return 0;
      return a.important ? -1 : 1;
    });

  return (
    <>
      <div className="flex content-center gap-1 mb-4">
        <SidebarTrigger className="sidebar-trigger" />
        <h1 className="text-3xl font-semibold">Today</h1>
      </div>
      <NewTask />
      <div className="my-4 space-y-2">
        {filtered.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}
