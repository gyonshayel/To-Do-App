import { useTasks } from "../../context/TaskContext";
import { Task } from "../../components/Task";
import { NewTask } from "../../components/NewTask";

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
      <NewTask list="Scheduled" />
      <div className="my-4 space-y-2">
        {filtered.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}
