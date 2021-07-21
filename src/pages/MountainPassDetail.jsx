import React, { Component } from 'react'
import PrintRouteCard from '../components/Card/PrintRouteCard';
import PrintMunicipalityCard from '../components/Card/PrintMunicipalityCard';
import Container from '../components/Container';
import Map from '../components/Map';
import apiClient from '../services/apiClient';

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
            console.log(response)
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
                {status === 'loading' && <p>Loading data</p>}
                {status === 'loaded' && (
                    <>
                    <p>{data.name}</p>
                    <Map data={[data]}/>
                    <Container title={`Las mejores rutas para coronar ${data.name} `}>
                        <PrintRouteCard data={dataRoutes}/>
                    </Container>
                    <Container title={`Municipios cercanos`} >
                      <PrintMunicipalityCard data={dataMunicipalities} />
                    </Container>
                    </>
                    
                )}
                
            </div>
        )
    }
}

export default MountainPassDetail
