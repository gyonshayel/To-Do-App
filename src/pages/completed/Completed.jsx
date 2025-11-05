import { NewTask } from "../../components/NewTask";
import { TasksList } from "../../components/TasksList";

export function Completed() {
  return (
    <>
      <NewTask list="Completed" />
      <TasksList list="Completed" />
    </>
  );
}
