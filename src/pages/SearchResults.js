import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import { useLocation } from "react-router-dom";

import apiClient from '../services/apiClient';

import Map from "../components/Map"
import Header from '../components/Header';
import Container from '../components/Container';
import PrintMunicipalityCard from '../components/Card/PrintMunicipalityCard';

export default function SearchResults(props) {
  const { search } = useLocation();
  const queryValues = queryString.parse(search);
  const { arrival, departure } = queryValues;

  const calculateMiddleDate = () => {
    const date1 = new Date (arrival)
    const date2 = new Date (departure)
    const middleDate = new Date (date2 - (date2-date1)/2);
    return middleDate;
  }

  // call the Weather API and pass it the middleName
  // eslint-disable-next-line no-unused-vars
  const middleDate = calculateMiddleDate();

  const [ municipalities, setMunicipalities ] = useState([]);
  
  useEffect(() => {
    let mounted = true;
    apiClient.getSearchResults(`/search${props.location.search}`)
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