import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import apiClient from '../services/apiClient';
import Header from '../components/Header/Header';
import Container from '../components/Container';
import PrintMunicipalityCard from '../components/Card/PrintMunicipalityCard';

import { calculateMiddleDate } from '../helpers'
import MultiplePointMap from '../components/MultiplePointMap';

export default function SearchResults(props) {
  const { search } = useLocation();
  const { arrival, departure, locations } = queryString.parse(search);
  console.log('search results', locations)

  // call the Weather API and pass it the middleName
  // eslint-disable-next-line no-unused-vars
  const middleDateForApiRequest = calculateMiddleDate(arrival, departure);
  console.log('api request', middleDateForApiRequest, locations)

  const [ municipalities, setMunicipalities ] = useState({
    municipalitiesData: [],
    status: 'loading'
  });
  
  useEffect(() => {
    
    apiClient
      .getSearchResults(props.location.search)
      .then(response => {
          setMunicipalities({
            municipalitiesData: response,
            status: 'loaded'
          })
      })
      .catch(error => console.log(error))
  }, [])
  
  return (
    <>
      { municipalities.status === 'loading' 
        ? (<p>loading data</p>) 
        : (
            <>
              <Header />
              <main>
                <h1 className="mb-5">Search Results</h1>
                <MultiplePointMap data={municipalities.municipalitiesData}/>
                <Container>
                  <PrintMunicipalityCard data={municipalities.municipalitiesData} />
                </Container>
              </main>
            </>
          )
      }
    </>
  )
}