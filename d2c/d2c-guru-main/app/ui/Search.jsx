"use client";
import React, { useState, useRef } from "react";
import { MdiMagnify } from "../components/icons/magnify";
import { Close } from "../components/icons/close";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const [isSearch, setIsSearch] = useState(false);
  const router = useRouter();

  const inputRef = useRef(null);

  const toggleSearchInput = () => {
    setIsSearch(!isSearch);
    if (!isSearch) {
      // Focus on the input field when it becomes visible
      setTimeout(() => {
        inputRef.current.focus();
      }, 200);
    }
  };

  const handleSearch = useDebouncedCallback((term) => {
    const trimmedTerm = term.trim();

    if (trimmedTerm) {
      // Navigate to the brand listing page with the search term as a query parameter
      router.push(`/brands?query=${encodeURIComponent(trimmedTerm)}`);
    } else {
      // Navigate to the brand listing page without any search term
      router.push("/brands");
    }
  }, 700);

  return (
    <>
      <div
        className={
          isSearch
            ? "absolute inset-0 bg-primary-500"
            : "relative flex flex-shrink-0"
        }
      >
        <div
          className={
            isSearch ? "container flex justify-between items-center h-full" : ""
          }
        >
          <label htmlFor="search" className="sr-only">
            Search
          </label>

          <input
            className={
              isSearch
                ? " block placeholder:text-primary-300 text-white flex-1 bg-transparent py-10 focus:outline-none text-2xl z-50"
                : "hidden"
            }
            placeholder={placeholder}
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get("query")?.toString()}
            ref={inputRef}
          />
          <div>
            <MdiMagnify
              onClick={() => toggleSearchInput()}
              className={
                isSearch
                  ? "hidden"
                  : "cursor-pointer text-2xl text-primary-200 hover:text-white peer-focus:text-gray-900"
              }
            />

            <Close
              onClick={() => toggleSearchInput()}
              className={
                isSearch
                  ? "cursor-pointer text-2xl text-primary-300 hover:text-primary-400 peer-focus:text-gray-900 bg-primary-500 relative z-50 right-1 sm:right-0"
                  : "hidden"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
