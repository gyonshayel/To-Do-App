import { useTasks } from "../../context/TaskContext";
import { Task } from "../../components/Task";
import { NewTask } from "../../components/NewTask";
import { SidebarTrigger } from "../../components/ui/sidebar";

export function All() {
  const { tasksArray } = useTasks();

  return (
    <>
      <div className="flex content-center gap-1 mb-4">
        <SidebarTrigger className="sidebar-trigger" />
        <h1 className="text-3xl font-semibold">All</h1>
      </div>
      <NewTask list="All" />
      <div className="my-4 space-y-2">
        {tasksArray.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}
