import { useTasks } from "../../context/TaskContext";
import { Task } from "../../components/Task";
import { NewTask } from "../../components/NewTask";
import { SidebarTrigger } from "../../components/ui/sidebar";

export function Scheduled() {
  const { tasksArray } = useTasks();
  const today = new Date();

  const filtered = tasksArray
    .filter(
      (task) =>
        new Date(task.date).toDateString() !== today.toDateString() ||
        task.list === "Scheduled"
    )
    .sort((a, b) => {
      // Sort based on the due date
      if (new Date(a.date).toDateString() === new Date(b.date).toDateString())
        return 0;
      return new Date(a.date) < new Date(b.date) ? -1 : 1;
    });

  return (
    <>
      <div className="flex content-center gap-1 mb-4">
        <SidebarTrigger className="sidebar-trigger" />
        <h1 className="text-3xl font-semibold">Scheduled</h1>
      </div>
      <NewTask list="Scheduled" />
      <div className="my-4 space-y-2">
        {filtered.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}
