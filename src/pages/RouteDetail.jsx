import React, { Component } from 'react'
import PrintMunicipalityCard from '../components/Card/PrintMunicipalityCard';
import PrintMountainPassCard from '../components/Card/PrintMountainPassCard';
import Container from '../components/Container';
import Header from '../components/Header/Header';
import RouteGpxConverter from '../components/RouteGpxConverter';
import DownloadBtn from '../components/DownloadBtn';
import apiClient from '../services/apiClient';
import gif from '../images/bike-loading.gif';
import Footer from '../components/Footer';
import { formatNumber } from '../helpers'

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
            <Header>
                <div className="text-neutral-medium mt-10 mb-4 md:mt-16 md:mb-8 md:w-9/12">
                    {status === 'loaded' &&
                    <> 
                      <h1 className="mb-2">{data.name}</h1>
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
                            <RouteGpxConverter gpx={data.gpx} data={data}/>
                          </div>
                          <div className="flex-col md:w-5/12">
                            <div className=" bg-white p-6 rounded-xl shadow-xl mb-8">
                                <p className="tertiary_title_card leading-long mb-4">Todo lo que debes saber</p>
                                <ul>
                                <li className="secondary_body_regular"><span className="caption_regular ml-1">Distancia</span> {data.distance} km</li>
                                <li className="secondary_body_regular"><span className="caption_regular ml-1">Altitud Máxima:</span> {data.max_alt} m</li>
                                <li className="secondary_body_regular"><span className="caption_regular ml-1">Desnivel:</span> {formatNumber(data.gradient)} m</li>
                                <li className="secondary_body_regular"><span className="caption_regular ml-1">Muncipios por los que pasa:</span> {data.municipalities_ids.length}</li>
                                </ul>
                            </div>
                            <DownloadBtn gpx={data.gpx} name={data.name}/>
                          </div>
                        </div>
                        <Container title={"Municipios por donde pasaras"}>
                            <PrintMunicipalityCard data={dataMunicipalities} />
                        </Container>
                        <Container title={"Puertos de montaña que conquistaras"}>
                            <PrintMountainPassCard  data={data.mountain_passes_ids} />
                        </Container>
                    </>
                )}
              </main>
              <Footer />
          </>
        )
    }
}

export default RouteDetail