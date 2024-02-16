import React from "react";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from "./Loading";

const Result = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults("?query=shubhamadelkar github&limit=5&related_keywords=true");
  }, []);

  if (isLoading) return <Loading />;
  console.log(location.pathname);
  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ url, title, description }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">{url}</p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <p className="text-sm text-gray-200">{description}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return "IMAGES";
    case "/news":
      return "NEWS";
    case "/videos":
      return "VIDEOS";
    default:
      return "ERROR!";
  }
};

export default Result;
