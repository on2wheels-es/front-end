import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import apiClient from "../services/apiClient";
import moment from 'moment';

export const SearchContext = React.createContext();

export const useSearchBar = () => {
  const searchContext = useContext(SearchContext);
  return searchContext;
}

const SearchProvider = (props) => {
    const [searchValues, setSearchValues] = useState({
      middleDate: '',
      CCAA: '',
      startDate: moment(),
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
      const middleDate = calculateMiddleDate();
      setSearchValues({
        ...searchValues,
        middleDate,
        CCAA
      });

      apiClient.getMunicipalitiesFromSearch([884, 7257, 4547, 4613])
               .then((response) => {
                 console.log(response)
                 setSearchValues({
                  ...searchValues,
                  status: "loaded",
                  municipalities: response
              });
            })
            .then(() => {
              history.push("/results");
            }) 
    };

    const calculateMiddleDate = () => {
      const { startDate, endDate } = searchValues;
      const date1 = new Date(startDate._d);
      const date2 = new Date(endDate._d);
      const middleDate = new Date(date2 - (date2-date1)/2);

      return moment(middleDate).format('L');
    }
  
    return (
      <SearchContext.Provider
        value={{ searchValues, onDatesChange, onFocusChange, onSearchHandler, ...props }}
      >
        {props.children}
      </SearchContext.Provider>
    );
};

export default SearchProvider;