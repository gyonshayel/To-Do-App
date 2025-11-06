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
    <header className="sm:sticky top-0 z-40 bg-blue-100">
      <div className="sm:flex justify-between content-center p-4 border-b">
        <Link to="/" className="text-3xl font-bold">
          To Do
        </Link>
        <form className="self-end flex content-center mt-2 sm:mt-0 border border-r-0 rounded-full">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            className="flex-1 text-base px-2 lg:px-4 rounded-full focus:outline-0"
            id="search"
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button className="rounded-full" variant="outline" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
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
