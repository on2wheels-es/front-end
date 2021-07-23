import React from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import '../react_dates_overrides.css'
import CustomDropdownMenu from "./CustomDropdownMenu";
import { useSearchBar } from "../providers/SearchProvider";
import { DateRangePicker } from "react-dates";
import { ccaaOptions } from "../data"


const SearchBar = () => {
  const { searchValues, onDatesChange, onFocusChange, onClickSearchHandler, onLocationChange } = useSearchBar();
  const { startDate, endDate, focusedInput, CCAA } = searchValues;

  const width = window.innerWidth;
  const breakpoint = 761;

  const onSearchSubmit = (e) => { 
    e.preventDefault();
    onClickSearchHandler();
  };

  return (
    <div className="searchBar-container">
      <div className="flex flex-col space-y-2 761md:flex-row 761md:justify-between 761md:items-center 761md:space-y-0 ">
        <div className="flex flex-col px-2 pt-2 border-2 rounded-lg 761md:border-none">
          <label className="text-xs w-2/6 pb-1 text-left text-gray-400 761md:w-2/5">¿A dónde quieres ir?</label>
            <CustomDropdownMenu 
              data={ccaaOptions}  
              handleSelectedValue={(selectedLocation) => onLocationChange(selectedLocation)} 
              defaultSelectedValue={CCAA}
              placeholder={'Elige tu destino'}
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