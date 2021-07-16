import React, { useState, useContext } from "react";

import { SearchContext } from "../providers/SearchProvider";

const SearchBar = () => {
  const searchContext = useContext(SearchContext); 
  const { dates, CCAA } = searchContext.allValues;
  
  const [allValues, setAllValues] = useState({
    dates: dates,
    CCAA: CCAA
  });


  const searchInputHandler = (e) => {
    e.preventDefault();
    searchContext.searchHandler(allValues);
  };

  const inputHandler = e => {
    setAllValues({...allValues, [e.target.name]: e.target.value});
  };

  return (
    <div className="border rounded-lg px-1 py-1 flex justify-between w-full max-w-screen-sm mx-auto shadow-lg mb-6">
      <input
        placeholder="Dates"
        name="dates"
        type="text"
        className="w-2/6 border-r-2 p-2"
        value={allValues.dates}
        onChange={inputHandler}
      />
      <input
        placeholder="CCAA"
        type="text"
        name="CCAA"
        className="w-2/6"
        value={allValues.CCAA}
        onChange={inputHandler}
      />
      <button
        onClick={searchInputHandler}
        className="inline-block w-1/4 bg-indigo-500 p-2 rounded-lg uppercase text-white font-semibold"
      > 
      Search
      </button>
    </div>
  );
};

export default SearchBar;