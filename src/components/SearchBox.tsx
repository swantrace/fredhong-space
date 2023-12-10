import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
  type ChangeEvent,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import contentIndexer, { type SearchContent } from "../lib/contentIndexer";

const SearchBox = () => {
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [searchResults, setSearchResults] = useState<SearchContent[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const clearSearch = useCallback(() => {
    setSearchResults([]);
    setSearchTerm("");
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        clearSearch();
      }
    },
    [clearSearch]
  );

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Element)
      ) {
        clearSearch();
      }
    },
    [clearSearch]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleKeyDown, handleClickOutside]);

  const performSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const results = contentIndexer.search(value);
    setSearchResults(results);
    setSearchTerm(value);
  };

  return (
    <>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          ref={searchInputRef}
          value={searchTerm}
          id="search-input"
          autoComplete="off"
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search for anything"
          onChange={performSearch}
        />
      </div>
      {searchResults.length ? (
        <ul
          className="w-80 border-solid border rounded-md z-10 bg-white max-h-80 overflow-auto absolute is-multiple"
          role="listbox"
        >
          {searchResults.map((result) => (
            <li
              className={`hover:bg-indigo-600 hover:text-white p-3 relative cursor-pointer search-result-item`}
              key={result.slug}
            >
              <Link
                href={`/${result.category}/${result.slug}`}
                className="block w-full h-full"
              >
                <div className="font-bold text-sm truncate">{result.title}</div>
                <p className="truncate text-sm">{result.summary}</p>
                <span className="mt-2 text-xs text-white bg-gray-800 px-2 py-1 rounded-xl">
                  {result.category}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default SearchBox;
