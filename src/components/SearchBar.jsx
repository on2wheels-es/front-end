import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { useSearchBar  } from "../providers/SearchProvider";

import React, { useState } from "react";
import { DateRangePicker } from "react-dates";


const SearchBar = () => {
  const { searchValues, onDatesChange, onFocusChange, onSearchHandler } = useSearchBar();
  const { date, CCAA, startDate, endDate, focusedInput } = searchValues;
  const [valuesToApi, setValuesToApi] = useState({
    date: date,
    CCAA: CCAA
  });

  // Funció startDate - endDate mid point
  // setSearchValues( { date: date})
  const onSearchSubmit = (e) => { 
    e.preventDefault();
    onSearchHandler(valuesToApi);
  };

  const handleInput = e => {
    setValuesToApi({...valuesToApi, [e.target.name]: e.target.value});
  };

  return (
    <div className="border rounded-lg px-1 py-1 flex justify-between w-full mx-auto shadow-lg mb-6">
      < DateRangePicker
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
        value={valuesToApi.date}
        onChange={handleInput}
      />
      <input
        placeholder="CCAA"
        type="text"
        name="CCAA"
        className="w-2/6 border-l-2 pl-4"
        value={valuesToApi.CCAA}
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