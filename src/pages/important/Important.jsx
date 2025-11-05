import { NewTask } from "../../components/NewTask";
import { TasksList } from "../../components/TasksList";

export function Important() {
  return (
    <>
      <NewTask list="Important" />
      <TasksList list="Important" />
    </>
  );
}
