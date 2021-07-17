import React, { useState, useContext } from "react";

import { SearchContext } from "../providers/SearchProvider";

const SearchBar = () => {
  const searchContext = useContext(SearchContext); 
  const { date, CCAA } = searchContext.searchValues;
  
  const [searchValues, setSearchValues] = useState({
    date: date,
    CCAA: CCAA
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    searchContext.searchHandler(searchValues);
  };

  const handleInput = e => {
    setSearchValues({...searchValues, [e.target.name]: e.target.value});
  };

  return (
    <div className="border rounded-lg px-1 py-1 flex justify-between w-full max-w-screen-sm mx-auto shadow-lg mb-6">
      <input
        placeholder="Dates"
        name="dates"
        type="text"
        className="w-2/6 border-r-2 p-2"
        value={searchValues.dates}
        onChange={handleInput}
      />
      <input
        placeholder="CCAA"
        type="text"
        name="CCAA"
        className="w-2/6"
        value={searchValues.CCAA}
        onChange={handleInput}
      />
      <button
        onClick={onSearchSubmit}
        className="inline-block w-1/4 bg-indigo-500 px-1 py-3 rounded-lg uppercase text-white font-semibold m-0"
      > 
      Search
      </button>
    </div>
  );
};

export default SearchBar;