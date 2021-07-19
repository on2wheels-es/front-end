import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { useSearchBar  } from "../providers/SearchProvider";

import React, { useState } from "react";
import { DateRangePicker } from "react-dates";
import '../react_dates_overrides.css'

const SearchBar = () => {
  const { searchValues, onDatesChange, onFocusChange, onSearchHandler } = useSearchBar();
  const { CCAA, startDate, endDate, focusedInput } = searchValues;
  const [valuesToApi, setValuesToApi] = useState({
    CCAA: CCAA
  });

  const width = window.innerWidth;
  const breakpoint = 761;

  const onSearchSubmit = (e) => { 
    e.preventDefault();
    onSearchHandler(valuesToApi);
  };

  const handleInput = e => {
    setValuesToApi({...valuesToApi, [e.target.name]: e.target.value});
  };  

  return (
    <div className="searchBar-container">
      <div className="searchBar-container-flex">
          <DateRangePicker
            startDate={startDate}
            startDateId="start-date"
            endDate={endDate}
            endDateId="end-date"
            onDatesChange={onDatesChange}
            focusedInput={focusedInput}
            onFocusChange={onFocusChange}
            orientation={ width >= breakpoint ? "horizontal" : "vertical"}
            numberOfMonths={2} 
          />
        <span className="hidden 761md:block 761md:border-l-2 761md:py-5 761md:px-1 761md:ml-2 761md:mr-1 lg:ml-1.5 lg:mr-0.5"></span>
        <input
          placeholder="CCAA"
          type="text"
          name="CCAA"
          className="border pl-2 py-3 rounded-xl text-center 761md:text-left 761md:border-none 761md:rounded-none 761md:w-64"
          value={valuesToApi.CCAA}
          onChange={handleInput}
        />
        <button
          onClick={onSearchSubmit}
          className="inline-block bg-indigo-500 px-1 py-3 rounded-xl uppercase text-white font-semibold m-0 761md:w-1/6"
        > 
        Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;