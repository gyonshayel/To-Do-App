import { useTasks } from "../../context/TaskContext";
import { Task } from "../../components/Task";
import { NewTask } from "../../components/NewTask";
import { SidebarTrigger } from "../../components/ui/sidebar";

export function Important() {
  const { tasksArray } = useTasks();

  const filtered = tasksArray.filter((task) => task.important === true);

  return (
    <>
      <div className="flex content-center gap-1 mb-4">
        <SidebarTrigger className="sidebar-trigger" />
        <h1 className="text-3xl font-semibold">Important</h1>
      </div>
      <NewTask list="Important" />
      <div className="my-4 space-y-2">
        {filtered.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}
