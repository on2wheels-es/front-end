import React, { Component } from 'react'
import Map from '../components/Map';
import Container from '../components/Container';
import PrintRouteCard from '../components/Card/PrintRouteCard';
import PrintMountainPassCard from '../components/Card/PrintMountainPassCard';
import Header from '../components/Header/Header';
import gif from '../images/bike-loading.gif';
import RoutesIcon from '../components/iconsSVG/RoutesIcon';
import MountainPassesIcon from '../components/iconsSVG/MountainPassesIcon';

import apiClient from '../services/apiClient';
import Footer from '../components/Footer';

export class MunicipalityDetail extends Component {

    constructor(props) {
        super(props);
        this.state= {
            status: 'loading',
            data: undefined,
            dataRoutes: undefined,
            dataMountainPasses: [],
        }
    }

    async componentDidMount() {
        try {
            const { id } = this.props.match.params;

            const response = await apiClient.getMunicipality(id);
            
            this.setState({
                status: 'loaded',
                data: response,
                dataRoutes: response.routes_ids,
                dataMountainPasses: response.mountain_passes_ids
            })

        } catch(error) {
            console.log(error)
        }
    }

    render() {
        const { data, dataRoutes, dataMountainPasses, status } = this.state;

        return (
          <>
            <Header>
              <div className="text-neutral-medium mt-10 mb-4 md:mt-16 md:mb-8 md:w-9/12">
                {status === 'loaded' &&
                <> 
                  <div className="caption_regular font-bold inline-block px-4 py-1 bg-neutral-white text-black mb-6 md:mb-12">
                    {data.ccaa}
                  </div>
                  <h1 className="mb-2">{data.municipality}</h1>
                </>
                }
              </div>
            </Header>
            <main>
                {status === 'loading' && <img src={gif} alt="gif" />}
                {status === 'loaded' && (
                  <>
                  <div className="mb-8 md:flex items-start md:mb-16">
                      <div className="w-full mb-4 md:mb-0 md:w-7/12 md:mr-8 md:h-1/6 md:overflow-hidden">
                        <Map data={[data]} zoom={7}>
                            <RoutesIcon text={data.routes_number} />
                            <MountainPassesIcon text={dataMountainPasses.length} />
                        </Map>
                      </div>
                      <div className="md:w-5/12  bg-white p-6 rounded-xl shadow-xl">
                        <p className="tertiary_title_card leading-long mb-4">Lo que debes saber de {data.municipality}</p>
                        <ul>
                          <li className="secondary_body_regular"><span className="caption_regular ml-1">Número de habitantes:</span> {data.municipality_inhabitants}</li>
                          <li className="secondary_body_regular"><span className="caption_regular ml-1">Área georgráfica:</span> { data.georgraphic_area === undefined ? 'No hay datos' : `${data.georgraphic_area}km` }</li>
                          <li className="secondary_body_regular"><span className="caption_regular ml-1">Número de rutas:</span> {data.routes_number}</li>
                          <li className="secondary_body_regular"><span className="caption_regular ml-1">Número de puertos de montaña:</span> {data.mountain_passes_ids.length}</li>
                        </ul>
                      </div>
                  </div>
                    <Container title={`Rutas en ${data.municipality} `}>
                      <PrintRouteCard data={dataRoutes}/>
                    </Container>
                    <Container title={`Puertos de Montaña`} >
                      <PrintMountainPassCard data={dataMountainPasses} />
                    </Container>
                  </>
                )}
            </main>
            <Footer />
          </>
        )
    }
}

export default MunicipalityDetail
