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
    <div className="">
      <input
        placeholder="Dates"
        name="dates"
        type="text"
        className=""
        value={allValues.dates}
        onChange={inputHandler}
      />
      <input
        placeholder="CCAA"
        type="text"
        name="CCAA"
        className=""
        value={allValues.CCAA}
        onChange={inputHandler}
      />
      <button
        onClick={searchInputHandler}
      > 
      Search
      </button>
    </div>
  );
};

export default SearchBar;