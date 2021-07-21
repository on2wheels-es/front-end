import React, { Component } from 'react'
import PrintMunicipalityCard from '../components/Card/PrintMunicipalityCard';
import PrintMountainPassCard from '../components/Card/PrintMountainPassCard';
import Container from '../components/Container';
import Map from '../components/Map';
import apiClient from '../services/apiClient';

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
            <div>
                {status === 'loading' && <p>Loading data</p>}
                {status === 'loaded' && (
                    <>
                        <p>{data.name}</p>
                        <Map data={[data]}/>
                        <Container title={"Municipios por donde pasa esta ruta"}>
                            <PrintMunicipalityCard data={dataMunicipalities} />
                        </Container>
                        <Container title={"Puertos de montaña que conquistaras"}>
                            <PrintMountainPassCard  data={data.mountain_passes_ids} />
                        </Container>
                    </>
                )}
                
            </div>
        )
    }
}

export default RouteDetail