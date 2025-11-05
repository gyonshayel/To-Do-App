import { useTasks } from "../../context/TaskContext";
import { Task } from "../../components/Task";
import { NewTask } from "../../components/NewTask";

export function Important() {
  const { tasksArray } = useTasks();

  const filtered = tasksArray.filter((task) => task.important === true);

  return (
    <>
      <NewTask />
      <div className="my-4 space-y-2">
        {filtered.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}
