import { useTasks } from "../../context/TaskContext";
import { Task } from "../../components/Task";
import { NewTask } from "../../components/NewTask";

export function Scheduled() {
  const { tasksArray } = useTasks();
  const today = new Date();

  const filtered = tasksArray.filter(
    (task) =>
      new Date(task.date).toISOString().split("T")[0] !==
        today.toISOString().split("T")[0] || task.list === "Scheduled"
  );

  return (
    <>
      <NewTask list="Scheduled" />
      <div className="my-4 space-y-2">
        {filtered.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}
