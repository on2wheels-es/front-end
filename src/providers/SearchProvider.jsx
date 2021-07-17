import React, { useState } from "react";

export const SearchContext = React.createContext();

const SearchProvider = (props) => {
    const [searchValues, setSearchValues] = useState({
      date: '',
      CCAA: ''
    });

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [focusedInput, setFocusedInput] = useState();
  
    const onSearchSubmit = (newSearch) => {
      setSearchValues({...newSearch});
    };
  
    return (
      <SearchContext.Provider
        value={{ searchValues, onSearchSubmit, ...props }}
      >
        {props.children}
      </SearchContext.Provider>
    );
};

export default SearchProvider;