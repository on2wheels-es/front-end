import React, { Component } from 'react'
import PrintMunicipalityCard from '../components/Card/PrintMunicipalityCard';
import PrintMountainPassCard from '../components/Card/PrintMountainPassCard';
import Container from '../components/Container';
import Header from '../components/Header/Header';
import RouteGpxConverter from '../components/RouteGpxConverter';
import DownloadBtn from '../components/DownloadBtn';
import Favourite from '../components/Favourite';
import apiClient from '../services/apiClient';
import gif from '../images/bike-loading.gif';
import Footer from '../components/Footer';
import { formatNumber, difficulty } from '../helpers'

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
                      <div className="mb-8 md:flex items-start md:mb-16">
                        <div className="w-full mb-4 md:mb-0 md:w-7/12 md:mr-8 md:h-1/6 md:overflow-hidden">
                            <RouteGpxConverter gpx={data.gpx} data={data}/>
                          </div>
                          <div className="flex-col md:w-5/12">
                            <div className=" bg-white p-4 rounded-xl shadow-xl mb-8">
                                <div className="flex">
                                    <h1 className="h1_bold_small mb-2">{data.name}</h1>
                                    <Favourite type="routes" id={data._id}/>
                                </div>
                                <ul>
                                <li className="secondary_body_regular"><span className="caption_regular ml-1">Distancia</span> {data.distance} km</li>
                                <li className="secondary_body_regular"><span className="caption_regular ml-1">Altitud Máxima:</span> {formatNumber(data.max_alt)} m</li>
                                <li className="secondary_body_regular"><span className="caption_regular ml-1">Desnivel:</span> {formatNumber(data.gradient)} m</li>
                                <li className="secondary_body_regular"><span className="caption_regular ml-1">Dificultad:</span> {difficulty(data.difficulty_score)}</li>
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