import { useTasks } from "../../context/TaskContext";
import { Task } from "../../components/Task";
import { NewTask } from "../../components/NewTask";

export function All() {
  const { tasksArray } = useTasks();

  return (
    <>
      <NewTask list="All" />
      <div className="my-4 space-y-2">
        {tasksArray.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}
