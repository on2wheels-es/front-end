import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Map from "../components/Map"
import Header from '../components/Header';

import apiClient from '../services/apiClient';
import Container from '../components/Container';
import PrintMunicipalityCard from '../components/Card/PrintMunicipalityCard';


export default function SearchResults(props) {
  // Calculate the middle date;
  const { search } = useLocation();
  console.log(search)
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