import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')

export const SearchContext = React.createContext();

export const useSearchBar = () => {
  const searchContext = useContext(SearchContext);
  return searchContext;
}

const SearchProvider = (props) => {
    const [searchValues, setSearchValues] = useState({
      CCAA: '',
      startDate: null,
      endDate: null,
      focusedInput: null,
      status: "loading",
      municipalities: null
    });

    const history = useHistory();

    const onLocationChange = (CCAA) => {
      setSearchValues({
      ...searchValues,
      CCAA
    })
  };

    const onDatesChange = ({ startDate, endDate }) => {
      setSearchValues({
        ...searchValues,
        startDate,
        endDate
      });
    }

    const onFocusChange = (focusedInput) => {
      setSearchValues((prevState) => ({
        ...prevState,
        focusedInput
      }));
    }
  
    const onClickSearchHandler = () => {
      const { startDate, endDate, CCAA: { value } } = searchValues;
      history.push({
        pathname: '/search',
        search: `?arrival=${moment(startDate).format("DD-MM-YYYY")}&departure=${moment(endDate).format("DD-MM-YYYY")}&location=${value}`,
      });
    };
 
    return (
      <SearchContext.Provider
        value={{ searchValues, onLocationChange, onDatesChange, onFocusChange, onClickSearchHandler, ...props }}
      >
        {props.children}
      </SearchContext.Provider>
    );
};

export default SearchProvider;