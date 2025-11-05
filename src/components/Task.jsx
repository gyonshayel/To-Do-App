import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";

export function Task({ task }) {
  const today = new Date();
  const taskDate = new Date(task.date);
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const [taskDialog, setTaskDialog] = useState(task.task);
  const [noteDialog, setNoteDialog] = useState(task.note);
  const [dateDialog, setDateDialog] = useState(taskDate);
  const [importantDialog, setImportantDialog] = useState(
    task.important || false
  );
  const { toggleTask, updateTask, deleteTask } = useTasks();

  const handleUpdate = (event) => {
    event.preventDefault();
    updateTask(task.id, "task", taskDialog);
    updateTask(task.id, "note", noteDialog);
    updateTask(task.id, "date", dateDialog.toISOString());
    updateTask(task.id, "important", importantDialog);
  };

  return (
    <div className="flex content-center">
      <Checkbox
        checked={task.status === "complete"}
        onCheckedChange={() => toggleTask(task.id)}
      />
      <p className={task.status === "complete" ? "line-through" : ""}>
        {task.task}
      </p>
      <Dialog>
        <DialogTrigger asChild>
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
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="sr-only">
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>Edit and save changes.</DialogDescription>
          </DialogHeader>
          <form onSubmit={(event) => handleUpdate(event)}>
            <div>
              <input
                id="task"
                name="task"
                type="text"
                value={taskDialog}
                onChange={(e) => setTaskDialog(e.target.value)}
              />
              <input
                id="note"
                name="note"
                type="text"
                value={noteDialog}
                onChange={(e) => setNoteDialog(e.target.value)}
              />
              <Calendar
                mode="single"
                defaultMonth={dateDialog}
                selected={dateDialog}
                onSelect={(selected) => setDateDialog(selected)}
                disabled={{
                  before: new Date(),
                }}
                className="rounded-lg border shadow-sm"
              />
              {/* Important */}
              <Button
                onClick={(event) => {
                  event.preventDefault();
                  setImportantDialog(!importantDialog);
                }}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                {importantDialog ? (
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
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <Button
        onClick={() => deleteTask(task.id)}
        variant="outline"
        size="icon"
        className="rounded-full"
      >
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
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </Button>
      {today < dateDialog && (
        <p>Due {dateDialog.toLocaleDateString("en-US", options)}</p>
      )}
      {task.note && (
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.75 3A3.25 3.25 0 0 1 21 6.25V13h-4.75A3.25 3.25 0 0 0 13 16.25V21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5Zm2.81 11.5-6.06 6.06v-4.31c0-.966.784-1.75 1.75-1.75h4.31Z"
            fill="#ffffff"
          />
        </svg>
      )}
    </div>
  );
}
