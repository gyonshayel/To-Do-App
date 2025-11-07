import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function NewTask({ list = null }) {
  const { addTask } = useTasks();
  const [task, setTask] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState(new Date());
  const [important, setImportant] = useState(() =>
    list === "Important" ? true : false
  );

  const resetForm = () => {
    setTask("");
    setNote("");
    setDate(new Date());
    setImportant(false);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    if (!task.trim()) return;

    const taskObj = {
      id: crypto.randomUUID(),
      task,
      note,
      date: date.toISOString(),
      list,
      important,
      status: "incomplete",
      dateCreated: list === "All" ? null : new Date().toISOString(),
    };

    addTask(taskObj);
    resetForm();
  };

  return (
    <>
      <form className="grid grid-cols-[auto_1fr_auto_auto] grid-rows-2 bg-accent border border-border rounded-lg">
        <label className="row-span-2 shrink mt-2" htmlFor="task">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 m-1 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span></span>
        </label>

        {/* Task */}
        <input
          className="flex-1 w-full outline-none"
          id="task"
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <div className="flex content-center">
          {/* Date */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full my-1">
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
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-fit p-0">
              <Calendar
                mode="single"
                defaultMonth={date}
                selected={date}
                onSelect={(selected) => setDate(selected)}
                disabled={{
                  before: new Date(),
                }}
                className="p-0.5 m-0 rounded-lg border-none"
              />
            </PopoverContent>
          </Popover>

          {/* Important */}
          <Button
            onClick={(event) => {
              event.preventDefault();
              setImportant(!important);
            }}
            variant="ghost"
            size="icon"
            className="rounded-full my-1"
          >
            {important ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
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
                  d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>
            )}
          </Button>
        </div>

        {/* Submit */}
        <Button
          className="row-span-2 m-1 ml-4 rounded-full bg-green-500 text-green-200 hover:bg-green-500 hover:text-green-200 border border-green-300"
          onClick={(event) => handleAdd(event)}
          variant="outline"
          size="icon"
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
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </Button>

        {/* Note */}
        <input
          className="col-span-2 text-sm border-t border-t-border outline-none"
          id="note"
          type="text"
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </form>
    </>
  );
}
