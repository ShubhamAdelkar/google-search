import React from "react";
import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseURL = "https://google-web-search1.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseURL}${type}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "28c6d1b895msh36812dc37b88500p1a7264jsn18f5b032a4da",
        "X-RapidAPI-Host": "google-web-search1.p.rapidapi.com",
      },
    });

    const data = await response.json();
    console.log(data);
    setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
