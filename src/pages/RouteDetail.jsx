import React, { Component } from 'react'
import PrintMunicipalityCard from '../components/Card/PrintMunicipalityCard';
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
            console.log('response route', response)
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
                        <Container>
                            <PrintMunicipalityCard data={dataMunicipalities} />
                        </Container>
                    </>
                    
                )}
                
            </div>
        )
    }
}

export default RouteDetail