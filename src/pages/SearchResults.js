import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import apiClient from '../services/apiClient';
import moment from 'moment'
import Header from '../components/Header/Header';
import Container from '../components/Container';
import PrintMunicipalityCard from '../components/Card/PrintMunicipalityCard';
import gif from '../images/bike-loading.gif';

// import { calculateMiddleDate, getCCAAIds } from '../helpers'
import MultiplePointMap from '../components/MultiplePointMap';

export default function SearchResults(props) {
  const { search } = useLocation();
  const { arrival, departure } = queryString.parse(search);
  // const { selectedCCAA } = props.location.state;
  // const idsForApiRequest = getCCAAIds(selectedCCAA)
  // const middleDateForApiRequest = calculateMiddleDate(arrival, departure);

  const [ municipalities, setMunicipalities ] = useState({
    municipalitiesData: [],
    status: 'loading'
  });
  
  useEffect(() => {
    // apiClient
    //         .getSearchResults(middleDateForApiRequest, idsForApiRequest)
    //         .then(response => {
    //          setMunicipalities({
    //           municipalitiesData: response,
    //           status: 'loaded'
    //         });
    //       })
    //       .catch(error => console.log(error));
    
    apiClient
      .getPopularMunicipalities()
      .then(response => {
        setMunicipalities({
        municipalitiesData: response,
        status: 'loaded'
        });
      })
  }, [])
  
  return (
    <>
      { municipalities.status === 'loading' 
        ? (<img src={gif} alt="gif" />) 
        : (
            <>
              <Header />
              <main>
                <p className="body_primary_medium mb-5 md:my-8">Estos son los <b>municipios</b> con <b>mejor tiempo</b> entre el <b>{moment(arrival).format('DD')} de {moment(arrival).format('MMMM')}</b>  y el <b>{moment(departure).format('DD')} de {moment(departure).format('MMMM')}</b></p>
                <MultiplePointMap data={municipalities.municipalitiesData}/>
                <h2 className="mt-4">Elige tu próximo destino</h2>
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