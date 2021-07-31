import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import apiClient from '../services/apiClient';
import moment from 'moment'
import Header from '../components/Header/Header';
import Container from '../components/Container';
import PrintMunicipalityCard from '../components/Card/PrintMunicipalityCard';

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
        ? (<p>loading data</p>) 
        : (
            <>
              <Header />
              <main>
                <h3 className="mb-5 ">Los municipios con mejor tiempo para las fechas escogidas del {moment(arrival).format('DD-MM')} al {moment(departure).format('DD-MM')}</h3>
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