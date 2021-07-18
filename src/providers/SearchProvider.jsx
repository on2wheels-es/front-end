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
      CCAA: '',
      startDate: moment(),
      endDate: moment(),
      focusedInput: null
    });

    const onDatesChange = ({ startDate, endDate }) => {
      setSearchValues((prevState) => ({
        ...prevState,
        startDate,
        endDate
      }));
    }

    const onFocusChange = (focusedInput) => {
      setSearchValues((prevState) => ({
        ...prevState,
        focusedInput
      }));
    }
  
    const onSearchHandler = ({ date, CCAA }) => {
      setSearchValues((prevState) => ({
        ...prevState,
        date,
        CCAA
      }));
    };
  
    return (
      <SearchContext.Provider
        value={{ searchValues, onDatesChange, onFocusChange, onSearchHandler, ...props }}
      >
        {props.children}
      </SearchContext.Provider>
    );
};

export default SearchProvider;