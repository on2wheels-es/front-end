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
              <Header>
                <div className="text-neutral-medium mt-10 mb-4 md:mt-16 md:mb-8 md:w-9/12">
                    {status === 'loaded' &&
                    <> 
                    <div className="caption_regular font-bold inline-block px-4 py-1 bg-neutral-white text-black mb-6 md:mb-12">
                        {data.municipality}
                    </div>
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
                            <Map data={[data]}>
                              <AltitudeIcon text={data.altitude} />
                              <MountainSlopeIcon text={data.mountain_slope} />
                            </Map>
                        </div>
                        <div className="md:w-5/12  bg-white p-6 rounded-xl shadow-xl">
                        <p className="tertiary_title_card leading-long mb-4">Lo que debes saber de {data.municipality}</p>
                        <ul>
                          <li className="secondary_body_regular"><span className="caption_regular ml-1">Comunidad autónoma:</span> {data.province}</li>
                          <li className="secondary_body_regular"><span className="caption_regular ml-1">Altitud:</span> { data.altitude}m</li>
                          <li className="secondary_body_regular"><span className="caption_regular ml-1">Desnivel:</span> {data.mountain_slope}</li>
                          <li className="secondary_body_regular"><span className="caption_regular ml-1">Dificultad:</span> {data.technical_difficulty}</li>
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
