import { useTasks } from "../../context/TaskContext";
import { Task } from "../../components/Task";
import { NewTask } from "../../components/NewTask";

export function Today() {
  const { tasksArray } = useTasks();
  const today = new Date();

  const filtered = tasksArray.filter(
    (task) =>
      new Date(task.dateCreated).toISOString().split("T")[0] ===
      today.toISOString().split("T")[0]
  );

  return (
    <>
      <NewTask list="All" />
      <div className="my-4 space-y-2">
        {filtered.map((t) => (
          <Task key={t.id} task={t} />
        ))}
      </div>
    </>
  );
}
