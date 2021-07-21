import React, { Component } from 'react'
import Map from '../components/Map';
import Container from '../components/Container';
import PrintRouteCard from '../components/Card/PrintRouteCard';
import PrintMountainPassCard from '../components/Card/PrintMountainPassCard';
import Header from '../components/Header';

import apiClient from '../services/apiClient';

export class MunicipalityDetail extends Component {

    constructor(props) {
        super(props);
        this.state= {
            status: 'loading',
            data: undefined,
            dataRoutes: undefined,
            dataMountainPasses: undefined,
        }
    }
    
    getMountainPassesId = ({dataRoutes}) => {
      return  dataRoutes.map(route => route.mountain_passes_ids )
    }

    async componentDidMount() {
        try {
            const { id } = this.props.match.params;

            const response = await apiClient.getMunicipality(id);
            await this.setState({
                data: response,
                dataRoutes: response.routes_ids
            })

            const mountainPassesIds = await this.getMountainPassesId(this.state);
            console.log(mountainPassesIds)

            this.setState({
              status: 'loaded',
              dataMountainPasses: mountainPassesIds
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
                {status === 'loading' && <p>Loading data</p>}
                {status === 'loaded' && (
                  <>
                    <h1 className="mb-5">{data.municipality}</h1>
                    <Map data={[data]}/>
                    <Container title={`Las mejores rutas en ${data.municipality} `}>
                        <PrintRouteCard data={dataRoutes}/>
                    </Container>
                    <Container title={`Puertos de Montaña `} >
                      <PrintMountainPassCard data={dataMountainPasses} />
                    </Container>
                  </>
                )}
            </main>
          </>
        )
    }
}

export default MunicipalityDetail
