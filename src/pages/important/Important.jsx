import { useTasks } from "../../context/TaskContext";
import { Task } from "../../components/Task";
import { NewTask } from "../../components/NewTask";

export function Important() {
  const { tasksArray } = useTasks();

  const filtered = tasksArray.filter((task) => task.important === true);

  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Important</h1>
      <NewTask list="Important" />
      <div className="my-8 space-y-2">
        {filtered.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}
