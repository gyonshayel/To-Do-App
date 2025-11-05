import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";

export function NewTask({ list = "" }) {
  const { addTask } = useTasks();
  const [task, setTask] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState(new Date());
  const [important, setImportant] = useState(false);

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
      dateCreated: new Date().toISOString(),
    };

    addTask(taskObj);
    resetForm();
  };

  return (
    <>
      <form className="border grid grid-cols-[1fr_auto] grid-rows-2">
        {/* Task */}
        <div className="flex content-center">
          <label className="shrink" htmlFor="task">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </label>
          <input
            className="flex-1 w-full"
            id="task"
            type="text"
            placeholder="Add a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>

        <div>
          {/* Date */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
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
                className="rounded-lg border shadow-sm"
              />
            </PopoverContent>
          </Popover>

          {/* Important */}
          <Button
            onClick={(event) => {
              event.preventDefault();
              setImportant(!important);
            }}
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            {important ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
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
                className="size-6"
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

        {/* Note */}
        <input
          id="note"
          type="text"
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        {/* Submit */}
        <Button onClick={(event) => handleAdd(event)} variant="ghost">
          Add
        </Button>
      </form>
    </>
  );
}
