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
  
    const onSearchHandler = ({ CCAA }) => {
      setSearchValues({
        ...searchValues,
        CCAA
      });

      const { startDate, endDate } = searchValues;

      history.push({
        pathname: '/search',
        search: `?arrive=${moment(startDate).format("DD-MM-YYYY")}&departure=${moment(endDate).format("DD-MM-YYYY")}&location=${CCAA}`,
      });
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