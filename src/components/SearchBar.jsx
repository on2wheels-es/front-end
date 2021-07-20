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
      <div className="flex flex-col space-y-2 761md:flex-row 761md:justify-between 761md:items-center 761md:space-y-0 ">
        <div className="flex flex-col pl-2 pt-2 border-2 rounded-lg 761md:border-none">
          <label className="text-xs w-2/6 pb-1 text-left text-gray-400 761md:w-2/5">¿A dónde quieres ir?</label>
          <input
            placeholder="CCAA"
            type="text"
            name="CCAA"
            className="py-1 rounded-xl mb-3 761md:border-b-2 761md:rounded-none 761md:w-72"
            value={valuesToApi.CCAA}
            onChange={handleInput}
          />
        </div>
        <span className="hidden 761md:block 761md:border-l-2 761md:py-5 761md:px-1 761md:ml-2 761md:mr-1 lg:ml-1.5 lg:mr-0.5"></span>
        <div className="flex flex-col pl-2 pt-2 border-2 rounded-lg 761md:border-none">
          <label className="text-xs w-2/6 pb-1 text-left text-gray-400 761md:w-2/5">¿Cuándo quieres ir?</label>
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
            startDatePlaceholderText="Llegada"
            endDatePlaceholderText="Salida"
            startDateAriaLabel="Llegada"
            endDateAriaLabel="Salida"
          />
        </div>
        <button
          onClick={onSearchSubmit}
          className="inline-block bg-indigo-500 mt-2 px-1 py-3 761md:py-6 rounded-xl uppercase text-white font-semibold m-0 761md:w-1/6"
        > 
        Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchBar;