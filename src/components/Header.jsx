import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";

export function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim() !== "") {
      navigate(`/search/${query}`);
    } else {
      navigate("/");
    }
  }, [query]);

  return (
    <header className="mb-2 sm:mb-0 sm:sticky top-0 z-40 bg-blue-600/80 backdrop-blur-xs border-b border-blue-200">
      <div className="sm:flex justify-between content-center p-4">
        <Link to="/" className="text-3xl font-bold text-blue-100">
          To Do
        </Link>
        <form
          className="self-end flex content-center bg-background rounded-full border border-blue-200 mt-2.5 sm:mt-0 sm:mr-2"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            className="w-full sm:w-[300px] pl-2 outline-0"
            id="search"
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            type="submit"
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 text-blue-500"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </form>
      </div>
    </header>
  );
}
