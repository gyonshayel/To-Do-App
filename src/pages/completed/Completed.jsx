import { useTasks } from "../../context/TaskContext";
import { Task } from "../../components/Task";

export function Completed() {
  const { tasksArray } = useTasks();

  const filtered = tasksArray.filter((task) => task.status === "complete");

  return (
    <>
      <div className="my-4 space-y-2">
        {filtered.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}
