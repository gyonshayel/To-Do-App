import { NewTask } from "../../components/NewTask";
import { TasksList } from "../../components/TasksList";

export function Scheduled() {
  return (
    <>
      <NewTask list="Scheduled" />
      <TasksList list="Scheduled" />
    </>
  );
}
