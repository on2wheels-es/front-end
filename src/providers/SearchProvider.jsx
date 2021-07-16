import React, { useState } from "react";

export const SearchContext = React.createContext();

const SearchProvider = (props) => {
    const [allValues, setAllValues] = useState({
      dates: '',
      CCAA: ''
    });
  
    const searchHandler = (newSearch) => {
      setAllValues({...newSearch});
    };
  
    return (
      <SearchContext.Provider
        value={{ allValues, searchHandler }}
      >
        {props.children}
      </SearchContext.Provider>
    );
};

export default SearchProvider;