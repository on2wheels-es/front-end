import React, { useState } from "react";

import moment from 'moment';

export const SearchContext = React.createContext();

const SearchProvider = (props) => {
    const [searchValues, setSearchValues] = useState({
      date: '',
      CCAA: ''
    });

    const [startDate, setStartDate] = useState(moment());
    const [endDate, setEndDate] = useState(moment());
    const [focusedInput, setFocusedInput] = useState(null);
  
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