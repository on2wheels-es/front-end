import React, { Component } from 'react'
import PrintRouteCard from '../components/Card/PrintRouteCard';
import PrintMunicipalityCard from '../components/Card/PrintMunicipalityCard';
import Container from '../components/Container';
import Map from '../components/Map';
import Header from '../components/Header/Header';
import apiClient from '../services/apiClient';
import gif from '../images/bike-loading.gif';
import Footer from '../components/Footer';
import AltitudeIcon from '../components/iconsSVG/AltitudeIcon';
import MountainSlopeIcon from '../components/iconsSVG/MountainSlopeIcon';
import { formatNumber } from '../helpers'

export class MountainPassDetail extends Component {

    constructor(props) {
        super(props);
        this.state= {
            status: 'loading',
            data: undefined,
            dataRoutes: undefined,
            dataMunicipalities: undefined,
        }
    }
    
    async componentDidMount() {
        try {
            const { id } = this.props.match.params;

            const response = await apiClient.getMountainPass(id);

            this.setState({
                status: 'loaded',
                data: { coords: response.mountainPass.peak_coords, ...response.mountainPass},
                dataRoutes: response.routes,
                dataMunicipalities: response.uniqueMunicipalities
            })
        } catch(error) {
            console.log(error)
        }
    }

    render() {
        const { data, dataRoutes, dataMunicipalities, status } = this.state;

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
                              <AltitudeIcon text={data.altitude} />
                              <MountainSlopeIcon text={data.mountain_slope} />
                            </Map>
                        </div>
                        <div className="md:w-5/12  bg-white p-6 rounded-xl shadow-xl">
                        <h1 className="h1_bold_medium mb-2">{data.name}</h1>
                        <ul>
                          <li className="secondary_body_regular"><span className="caption_regular ml-1">Comunidad autónoma:</span> {data.province}</li>
                          <li className="secondary_body_regular"><span className="caption_regular ml-1">Altitud:</span> {formatNumber(data.altitude)} m</li>
                          <li className="secondary_body_regular"><span className="caption_regular ml-1">Desnivel:</span> {formatNumber(data.gradient)} m</li>
                          <li className="secondary_body_regular"><span className="caption_regular ml-1">Inclinación Media:</span> {formatNumber(data.mountain_slope)} %</li>
                        </ul>
                      </div>
                    </div>
                    <Container title={`Rutas para coronar el ${data.name} `}>
                        <PrintRouteCard data={dataRoutes}/>
                    </Container>
                    <Container title={`Municipios cercanos`} >
                      <PrintMunicipalityCard data={dataMunicipalities} />
                    </Container>
                  </>
                )}
            </main>
            <Footer />
         </>
        )
    }
}

export default MountainPassDetail;
