import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import React, { useState, useContext } from "react";
import { DateRangePicker } from "react-dates";

import { SearchContext } from "../providers/SearchProvider";

const SearchBar = () => {
  const searchContext = useContext(SearchContext); 
  const { date, CCAA } = searchContext.searchValues;
  const { startDate, endDate, focusedInput, onDatesChange, onFocusChange, onSearchHandler } = searchContext;
  console.log(startDate)
  const [searchValues, setSearchValues] = useState({
    date: date,
    CCAA: CCAA
  });

  // Funció startDate - endDate mid point
  // setSearchValues( { date: date})
  const onSearchSubmit = (e) => { 
    e.preventDefault();
    onSearchHandler(searchValues);
  };

  const handleInput = e => {
    setSearchValues({...searchValues, [e.target.name]: e.target.value});
  };

  return (
    <div className="border rounded-lg px-1 py-1 flex justify-between w-full mx-auto shadow-lg mb-6">
      < DateRangePicker
        className="w-5/12"
        startDate={startDate}
        startDateId="start-date"
        endDate={endDate}
        endDateId="end-date"
        onDatesChange={onDatesChange}
        focusedInput={focusedInput}
        onFocusChange={onFocusChange}
      />
      
      <input
        placeholder="Dates"
        name="date"
        type="text"
        className="border-r-2 pl-2"
        value={searchValues.date}
        onChange={handleInput}
      />
      <input
        placeholder="CCAA"
        type="text"
        name="CCAA"
        className="w-2/6 border-l-2 pl-4"
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