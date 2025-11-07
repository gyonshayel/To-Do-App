import { useParams, useNavigate } from "react-router";
import { Button } from "../../components/ui/button";
import { useLists } from "../../context/ListsContext";
import { useTasks } from "../../context/TaskContext";
import { Task } from "../../components/Task";
import { NewTask } from "../../components/NewTask";
import { SidebarTrigger } from "../../components/ui/sidebar";

export function Custom() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { listsArray, deleteList } = useLists();
  const { tasksArray } = useTasks();

  const listName = listsArray.find((list) => list.id === id)?.title;
  const filtered = tasksArray.filter((task) => task.list === listName);

  const handleDelete = () => {
    deleteList(id);
    navigate("/");
  };

  return (
    <>
      <div className="flex content-center gap-1 mb-4">
        <SidebarTrigger className="sidebar-trigger" />
        <h1 className="flex-1 text-3xl font-semibold">{listName}</h1>
        <Button
          onClick={handleDelete}
          variant="outline"
          size="icon"
          className="rounded-full bg-red-500 text-red-200 border border-red-300 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>
      </div>
      <NewTask list={listName} />
      <div className="my-4 space-y-2">
        {filtered.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}
