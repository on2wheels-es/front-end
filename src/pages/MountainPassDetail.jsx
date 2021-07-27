import React, { Component } from 'react'
import PrintRouteCard from '../components/Card/PrintRouteCard';
import PrintMunicipalityCard from '../components/Card/PrintMunicipalityCard';
import Container from '../components/Container';
import Map from '../components/Map';
import Favourite from '../components/Favourite';
import apiClient from '../services/apiClient';
import gif from '../images/bike-loading.gif';
import { withAuth } from "../providers/AuthProvider";

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
            <div>
                {status === 'loading' && <img src={gif} alt="gif" />}
                {status === 'loaded' && (
                    <>
                    <p>{data.name}</p>
                    <Map data={[data]}>
                              <h1>{data.name}</h1>
                                <span className="flex items-center text-sm" aria-label="Altitud del paso de montaña" role="img">
                                    <span className="flex items-end mt-1">
                                        <svg width="18" height="18" viewBox="0 0 500 500" role="presentation" aria-hidden="true" focusable="false" className="self-end">
                                            <path d="M469.093,309.224l-110.03-202.745c-1.312-2.417-3.842-3.922-6.592-3.922s-5.28,1.505-6.592,3.923l-25.688,47.335
                                            c-1.976,3.641-0.626,8.193,3.015,10.169c3.642,1.977,8.193,0.625,10.169-3.015l19.097-35.189l59.565,109.756l-30.081,26.961
                                            c-3.084,2.765-3.344,7.506-0.579,10.591c1.481,1.653,3.53,2.494,5.588,2.494c1.782,0,3.571-0.632,5.003-1.915l27.424-24.58
                                            l36.519,67.292c1.358,2.504,3.937,3.924,6.599,3.924c1.208,0,2.434-0.293,3.57-0.91
                                            C469.719,317.418,471.069,312.864,469.093,309.224z"/>
                                            <path d="M78.036,273.667c1.432,1.284,3.221,1.915,5.003,1.915c2.057,0,4.106-0.842,5.587-2.494
                                            c2.765-3.084,2.505-7.826-0.579-10.591l-30.081-26.961l59.565-109.756l19.097,35.189c1.975,3.641,6.526,4.99,10.169,3.015
                                            c3.64-1.976,4.99-6.529,3.014-10.169l-25.689-47.335c-1.312-2.417-3.841-3.922-6.592-3.922s-5.28,1.505-6.592,3.922L0.91,309.225
                                            c-1.976,3.64-0.626,8.193,3.014,10.169c1.137,0.617,2.362,0.91,3.571,0.91c2.662,0,5.24-1.42,6.599-3.924l36.519-67.292
                                            L78.036,273.667z"/>
                                            <path d="M241.593,46.369c-1.312-2.417-3.842-3.922-6.592-3.922c-2.75,0-5.28,1.505-6.592,3.922L27.552,416.477
                                            c-1.976,3.641-0.626,8.194,3.014,10.169c1.137,0.617,2.362,0.91,3.571,0.91c2.662,0,5.24-1.42,6.599-3.924l103.459-190.638
                                            l39.364,35.285c2.849,2.554,7.163,2.553,10.012,0l41.426-37.134l41.432,37.135c1.425,1.277,3.215,1.915,5.006,1.915
                                            s3.581-0.638,5.006-1.915l39.368-35.285l103.46,190.639c1.976,3.64,6.527,4.99,10.169,3.014c3.641-1.976,4.99-6.529,3.015-10.169
                                            L241.593,46.369z M281.434,252.622l-41.433-37.135c-2.848-2.554-7.162-2.553-10.012,0l-41.425,37.134l-37.015-33.179L235.001,65.67
                                            l83.452,153.772L281.434,252.622z"/>
                                            <path d="M315.871,326.259c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S320.283,326.259,315.871,326.259z"/>
                                            <path d="M141.381,370.05c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S145.792,370.05,141.381,370.05z"/>
                                            <path d="M342.276,350.436c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S346.687,350.436,342.276,350.436z"/>
                                        </svg>
                                        <span className="subtitle ml-2" aria-hidden="true">{data.altitude}m</span>
                                    </span>
                                </span>
                                <span className="flex items-center text-sm" aria-label="Desnivel del paso de montaña" role="img">
                                    <span className="flex items-center mt-1">
                                        <svg width="16" height="16" viewBox="0 0 500 500" role="presentation" aria-hidden="true" focusable="false" className="self-center">
                                        <path d="m441.624 425.969c.938-4.67-1.548-9.354-5.942-11.193l-286.641-120c-4.732-1.984-10.208-.056-12.654 4.461l-65 120c-1.679 3.099-1.602 6.852.201 9.88 1.804 3.028 5.067 4.883 8.592 4.883h351.64c4.764 0 8.867-3.36 9.804-8.031zm-344.655-11.969 52.694-97.282 232.375 97.282z"/><circle cx="256" cy="484" r="10"/><path d="m304.385 46.84c-9.628-17.789-28.168-28.84-48.385-28.84s-38.757 11.051-48.355 28.787l-201.025 366.045c-4.331 7.983-6.62 17.032-6.62 26.168 0 30.327 24.673 55 55 55h156c5.522 0 10-4.477 10-10s-4.478-10-10-10h-156c-19.299 0-35-15.701-35-35 0-5.815 1.452-11.566 4.176-16.586l201.029-366.054c6.129-11.325 17.929-18.36 30.795-18.36s24.666 7.035 30.824 18.414l200.976 365.955c2.748 5.065 4.2 10.816 4.2 16.631 0 19.299-15.701 35-35 35h-156c-5.522 0-10 4.477-10 10s4.478 10 10 10h156c30.327 0 55-24.673 55-55 0-9.136-2.289-18.185-6.645-26.213z"/>
                                        </svg>
                                    <span className="subtitle ml-2" aria-hidden="true">{data.mountain_slope}%</span>
                                    </span>
                                </span>
                    </Map>
                    <Container title={`Rutas para coronar el ${data.name} `}>
                        <PrintRouteCard data={dataRoutes}/>
                    </Container>
                    <Container title={`Municipios cercanos`} >
                      <PrintMunicipalityCard data={dataMunicipalities} />
                    </Container>
                    <Favourite type="mountainPasses" id={data._id}/>
                    </>
                    
                )}
                
            </div>
        )
    }
}

export default MountainPassDetail;
