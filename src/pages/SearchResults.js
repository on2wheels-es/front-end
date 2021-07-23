import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import apiClient from '../services/apiClient';

import Map from "../components/Map"
import Header from '../components/Header';
import Container from '../components/Container';
import PrintMunicipalityCard from '../components/Card/PrintMunicipalityCard';

import { calculateMiddleDate } from '../helpers'

export default function SearchResults(props) {
  const [ municipalities, setMunicipalities ] = useState([]);
  const { search } = useLocation();
  const { arrival, departure } = queryString.parse(search);

  // call the Weather API and pass it the middleName
  // eslint-disable-next-line no-unused-vars
  const middleDate = calculateMiddleDate(arrival, departure);
  console.log('in search results', middleDate)
  
  useEffect(() => {
    let mounted = true;
    apiClient.getSearchResults(props.location.search)
      .then(response => {
        if(mounted) {
          setMunicipalities(response)
        }
      })
      .catch(error => console.log(error))
    // eslint-disable-next-line no-return-assign
    return () => mounted = false;
  }, [])
  
  return (
    <>
      <Header />
      <main>
        <h1 className="mb-5">Search Results</h1>
        <Map data={municipalities}></Map>
        < Container>
          <PrintMunicipalityCard data={municipalities} />
        </Container>
      </main>
    </>
  )
}