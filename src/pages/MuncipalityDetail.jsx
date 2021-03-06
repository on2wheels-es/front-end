import React, { Component } from 'react'
import Map from '../components/Map';
import Container from '../components/Container';
import Favourite from '../components/Favourite';
import PrintRouteCard from '../components/Card/PrintRouteCard';
import PrintMountainPassCard from '../components/Card/PrintMountainPassCard';
import Header from '../components/Header/Header';
import gif from '../images/bike-loading.gif';
import RoutesIcon from '../components/iconsSVG/RoutesIcon';
import MountainPassesIcon from '../components/iconsSVG/MountainPassesIcon';
import { formatNumber } from '../helpers'

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
            <Header />
            <main>
                {status === 'loading' && <img src={gif} alt="gif" />}
                {status === 'loaded' && (
                  <>
                  <div className="mb-8 md:flex items-start md:mb-16">
                      <div className="w-full mb-4 md:mb-0 md:w-7/12 md:mr-8 md:h-1/6 md:overflow-hidden">
                        <Map data={[data]} zoom={7}>
                            <p className="font-heavy">{data.municipality}</p>
                            <RoutesIcon text={data.routes_number} />
                            <MountainPassesIcon text={dataMountainPasses.length} />
                        </Map>
                      </div>
                        <div className="md:w-5/12 bg-white p-6 rounded-xl shadow-xl">
                        <div className="flex items-center space-x-2">
                          <h1 className="h1_bold_medium mb-8">{data.municipality}</h1>
                          <div className="mb-8">
                            <Favourite type="municipalities" id={data._id}/>
                          </div>
                        </div>
                        <ul>
                          <li className="secondary_body_regular"><span className="caption_regular ml-1">N??mero de habitantes:</span> {formatNumber(data.municipality_inhabitants)}</li>
                          <li className="secondary_body_regular"><span className="caption_regular ml-1">Provincia:</span> { data.province }</li>
                          <li className="secondary_body_regular"><span className="caption_regular ml-1">N??mero de rutas:</span> {data.routes_number}</li>
                          <li className="secondary_body_regular"><span className="caption_regular ml-1">N??mero de puertos de monta??a:</span> {data.mountain_passes_ids.length}</li>
                        </ul>
                        </div>
                  </div>
                    <Container title={`Rutas en ${data.municipality} `}>
                      <PrintRouteCard data={dataRoutes}/>
                    </Container>
                    <Container title={`Puertos de Monta??a`} >
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
