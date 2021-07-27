import React, { Component } from 'react'
import PrintMunicipalityCard from '../components/Card/PrintMunicipalityCard';
import PrintMountainPassCard from '../components/Card/PrintMountainPassCard';
import Container from '../components/Container';
import Header from '../components/Header';
import Map from '../components/Map';
import DownloadBtn from '../components/DownloadBtn';
import apiClient from '../services/apiClient';
import gif from '../images/bike-loading.gif';

export class RouteDetail extends Component {

    constructor(props) {
        super(props);
        this.state= {
            status: 'loading',
            data: undefined,
            dataMunicipalities: undefined
        }
    }
    
    async componentDidMount() {
        try {
            const { id } = this.props.match.params;

            const response = await apiClient.getRoute(id);

            this.setState({
                status: 'loaded',
                data: { coords: response.route.start, ...response.route},
                dataMunicipalities: response.municipalities
            })
        } catch(error) {
            console.log(error)
        }
    }

    render() {
        const { data, status, dataMunicipalities } = this.state;

        return (
          <>
            <Header />
            <main>
                {status === 'loading' && <img src={gif} alt="gif" />}
                {status === 'loaded' && (
                      <>
                          <h1 className="mb-5">{data.name}</h1>
                          <Map data={[data]}>
                              <h1>{data.name}</h1>
                              <p>{data.distance} km</p>
                              <p>{data.gradient} m</p>
                          </Map>
                          <DownloadBtn gpx={data.gpx} name={data.name}/>
                          <Container title={"Municipios por donde pasaras"}>
                              <PrintMunicipalityCard data={dataMunicipalities} />
                          </Container>
                          <Container title={"Puertos de montaña que conquistaras"}>
                              <PrintMountainPassCard  data={data.mountain_passes_ids} />
                          </Container>
                      </>
                )}
              </main>
          </>
        )
    }
}

export default RouteDetail