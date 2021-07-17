import React, { useContext, useState } from "react";

import moment from 'moment';

export const SearchContext = React.createContext();

export const useSearchBar = () => {
  const searchContext = useContext(SearchContext);
  return searchContext;
}

const SearchProvider = (props) => {
    const [searchValues, setSearchValues] = useState({
      date: '',
      CCAA: ''
    });

    const [startDate, setStartDate] = useState(moment());
    const [endDate, setEndDate] = useState(moment());
    const [focusedInput, setFocusedInput] = useState(null);

    const onDatesChange = ({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
    }

    const onFocusChange = (focusedInput) => {
      setFocusedInput(focusedInput)
    }
  
    const onSearchHandler = (newSearch) => {
      setSearchValues({
        date: newSearch.date,
        CCAA: newSearch.CCAA
      });
    };
  
    return (
      <SearchContext.Provider
        value={{ searchValues, startDate, endDate, focusedInput, onDatesChange, onFocusChange, onSearchHandler, ...props }}
      >
        {props.children}
      </SearchContext.Provider>
    );
};

export default SearchProvider;