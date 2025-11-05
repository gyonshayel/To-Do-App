import { NewTask } from "../../components/NewTask";
import { TasksList } from "../../components/TasksList";

export function All() {
  return (
    <>
      <NewTask list="All" />
      <TasksList list="All" />
    </>
  );
}
