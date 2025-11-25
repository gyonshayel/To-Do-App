import { useParams } from "react-router";
import { useTasks } from "../../context/TaskContext";
import { Task } from "../../components/Task";

export function SearchResults() {
  const { tasksArray } = useTasks();
  const { query } = useParams();

  const filtered = tasksArray.filter((task) => {
    const searchQuery = (query || "").toLowerCase();
    return (
      task.task.toLowerCase().includes(searchQuery) ||
      task.note?.toLowerCase().includes(searchQuery) ||
      task.list?.toLowerCase().includes(searchQuery)
    );
  });

  return (
    <>
      <h2>Searching for "{query}"</h2>
      {filtered.length > 0 ? (
        <div className="my-8 space-y-2">
          {filtered.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No results found.</p>
      )}
    </>
  );
}
