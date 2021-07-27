import React, { Component } from 'react'
import Map from '../components/Map';
import Container from '../components/Container';
import PrintRouteCard from '../components/Card/PrintRouteCard';
import PrintMountainPassCard from '../components/Card/PrintMountainPassCard';
import Header from '../components/Header/Header';
import gif from '../images/bike-loading.gif';

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
                        <Map data={[data]}>
                                  <h1>{data.municipality}</h1>
                                  <span className="flex items-center text-sm" aria-label="Total de rutas desde el municipio" role="img">
                                    <span className="flex items-end mt-1">
                                      <svg width="50" height="25" viewBox="0 0 60 120" role="presentation" aria-hidden="true" focusable="false" className="self-end">
                                        <path d="m85.391 59.834a13.469 13.469 0 0 0 -2.6.257l-1.991-5.944-.364-1.085-2.236-6.662.4-.012c4.285-.137 5.573-3.062 5.656-4.59a1.75 1.75 0 1 0 -3.5-.189c0 .012-.091 1.211-2.274 1.281-1.4.045-2.683.035-2.695.034a1.751 1.751 0 0 0 -1.674 2.307l1.3 3.866-18.793.103-.763-2.488h2.879a1.75 1.75 0 0 0 0-3.5h-9.736a1.75 1.75 0 0 0 0 3.5h3.2l1.231 4.015-5.692 10.094a13.5 13.5 0 1 0 8.33 14.263h6.1a1.749 1.749 0 0 0 1.293-.571l14.969-16.43 1.051 3.133a13.467 13.467 0 1 0 5.911-1.382zm-30.548-4.489 4.979 16.239h-3.753a13.483 13.483 0 0 0 -5.286-9.034zm-2.31 16.239h-6.841l3.361-5.964a10 10 0 0 1 3.48 5.964zm-9.833 11.749a10 10 0 1 1 3.3-19.426l-4.828 8.568a1.75 1.75 0 0 0 1.528 2.609h9.836a10.008 10.008 0 0 1 -9.836 8.249zm20.26-13.465-5.269-17.168 18.893-.11.354 1.054.217.645zm22.431 13.465a10 10 0 0 1 -4.791-18.773l3.13 9.331a1.75 1.75 0 0 0 3.319-1.114l-3.127-9.322a9.866 9.866 0 0 1 1.468-.121 10 10 0 0 1 0 20z"/><path d="m64 17.25a46.75 46.75 0 1 0 46.75 46.75 46.8 46.8 0 0 0 -46.75-46.75zm0 90a43.25 43.25 0 1 1 43.25-43.25 43.3 43.3 0 0 1 -43.25 43.25z"/>
                                      </svg>
                                      <span className="subtitle" aria-hidden="true">{data.routes_number} rutas</span>
                                    </span>
                                  </span>
                                  <span className="flex items-center text-sm" aria-label="Desnivel del municipio" role="img">
                                    <span className="flex items-center mt-1 ml-5">
                                      <svg width="18" height="18" viewBox="0 0 500 500" role="presentation" aria-hidden="true" focusable="false" className="self-center">
                                        <path d="m210.864 0v161.838l-210.521 350.162h511.313l-165.552-290.753-35.195 59.561-70.045-118.898v-41.91h99.271l-22.5-45 22.5-45h-99.271v-30zm0 220.061v99.48l26.77 53.54-108.02 108.919h-76.23zm134.76 60.971 114.429 200.968h-30.617l-101.13-171.662zm48.994 200.968h-222.753l102.229-103.081-33.23-66.46v-91.446zm-103.025-422-7.5 15 7.5 15h-50.729v-30z"/>
                                      </svg>
                                      <span className="subtitle ml-2" aria-hidden="true">{dataMountainPasses.length} puertos</span>
                                    </span>
                                  </span>
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
