import { useTasks } from "../context/TaskContext";
import { Task } from "./Task";

export function TasksList({ list }) {
  const { tasksArray } = useTasks();
  const filtered = list
    ? tasksArray.filter((t) => t.list === list)
    : tasksArray;

  return (
    <div className="space-y-2">
      {filtered.length ? (
        filtered.map((t) => <Task key={t.id} task={t} />)
      ) : (
        <p className="text-muted">No tasks yet</p>
      )}
    </div>
  );
}
