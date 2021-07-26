import React from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import '../react_dates_overrides.css'
import CustomDropdownMenu from "./CustomDropdownMenu";
import SearchIcon from "./iconsSVG/SearchIcon";
import { useSearchBar } from "../providers/SearchProvider";
import { DateRangePicker } from "react-dates";
import { ccaaOptions } from "../data/data"


const SearchBar = () => {
  const { searchValues, onDatesChange, onFocusChange, onClickSearchHandler, onLocationChange } = useSearchBar();
  const { startDate, endDate, focusedInput, CCAA } = searchValues;

  const width = window.innerWidth;
  const breakpoint = 768;

  const onSearchSubmit = (e) => { 
    e.preventDefault();
    onClickSearchHandler();
  };

  return (
    <div className="searchBar-container">
      <div className="searchBar-container-flex">
        <div className="bg-neutral-medium-opacity pb-1 mx-2 border-b-2 md:border-b-0 md:w-5/12">
            <CustomDropdownMenu 
              data={ccaaOptions}  
              handleSelectedValue={(selectedLocation) => onLocationChange(selectedLocation)} 
              defaultSelectedValue={CCAA}
              placeholder={'Elige tu destino'}
            />
        </div>
        <div className="bg-neutral-medium-opacity mx-2 border-b-2 md:border-b-0 md:w-5/12 ">
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
          className="button-accent-searchBar"
        > 
          <SearchIcon text="Buscar" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;