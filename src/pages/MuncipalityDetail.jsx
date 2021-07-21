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
            dataMountainPasses: [],
        }
    }

    getUniqueMountainPasses = (response) => {
      const uniqueMountainPasses = []
      response.routes_ids.map(route => {
          return route.mountain_passes_ids.map(mountainPass => {
                                          return this.checkIfExists(uniqueMountainPasses, mountainPass)
                                      })
      })
      return uniqueMountainPasses;
    }

    checkIfExists = (array, data) => {
      const existingIds = array.map((obj) => obj._id);

      if (! existingIds.includes(data._id)) {
          array.push(data);
      }
    };

    async componentDidMount() {
        try {
            const { id } = this.props.match.params;

            const response = await apiClient.getMunicipality(id);
            
            this.setState({
                status: 'loaded',
                data: response,
                dataRoutes: response.routes_ids,
                dataMountainPasses: this.getUniqueMountainPasses(response)
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
