import React, { Component } from 'react'

import apiClient from '../services/apiClient';

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Container from '../components/Container'
import PrintMountainPassCard from '../components/Card/PrintMountainPassCard'
import PrintMunicipalityCard from '../components/Card/PrintMunicipalityCard'
import PrintRouteCard from '../components/Card/PrintRouteCard'

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state= {
      status: 'loading',
      dataMunicipalities: [],
      dataMountainPasses: [],
      dataRoutes: [
        {
          "_id": 23,
          "name": "20-AGO-13. Noja-Alisas-Cruz de Usaño-Fuente las varas- Noja",
          "ccaa": "Cantabria",
          "province": "Noja",
          "trailrank": 49,
          "distance": 88,
          "gradient": 1531,
          "min_alt": 0,
          "max_alt": 688,
          "municipality": "",
          "mountain_passes_ids": [859, 1034],
          "municipalities_ids": ""
        },
        {
          "_id": 24,
          "name": "Collsacreu",
          "ccaa": "Catalunya",
          "province": "Barcelona",
          "trailrank": 50,
          "distance": 100,
          "gradient": 1451,
          "min_alt": 90,
          "max_alt": 68,
          "municipality": "",
          "mountain_passes_ids": [859, 1034],
          "municipalities_ids": ""
        },
        {
          "_id": 23,
          "name": "20-AGO-13. Noja-Alisas-Cruz de Usaño-Fuente las varas- Noja",
          "ccaa": "Cantabria",
          "province": "Noja",
          "trailrank": 49,
          "distance": 88,
          "gradient": 1531,
          "min_alt": 0,
          "max_alt": 688,
          "municipality": "",
          "mountain_passes_ids": [859, 1034],
          "municipalities_ids": ""
        },
        {
          "_id": 23,
          "name": "20-AGO-13. Noja-Alisas-Cruz de Usaño-Fuente las varas- Noja",
          "ccaa": "Cantabria",
          "province": "Noja",
          "trailrank": 49,
          "distance": 88,
          "gradient": 1531,
          "min_alt": 0,
          "max_alt": 688,
          "municipality": "",
          "mountain_passes_ids": [859, 1034],
          "municipalities_ids": ""
        },
        {
          "_id": 23,
          "name": "20-AGO-13. Noja-Alisas-Cruz de Usaño-Fuente las varas- Noja",
          "ccaa": "Cantabria",
          "province": "Noja",
          "trailrank": 49,
          "distance": 88,
          "gradient": 1531,
          "min_alt": 0,
          "max_alt": 688,
          "municipality": "",
          "mountain_passes_ids": [859, 1034],
          "municipalities_ids": ""
        },
        {
          "_id": 23,
          "name": "20-AGO-13. Noja-Alisas-Cruz de Usaño-Fuente las varas- Noja",
          "ccaa": "Cantabria",
          "province": "Noja",
          "trailrank": 49,
          "distance": 88,
          "gradient": 1531,
          "min_alt": 0,
          "max_alt": 688,
          "municipality": "",
          "mountain_passes_ids": [859, 1034],
          "municipalities_ids": ""
        }
      ]
    }
  }

  async componentDidMount() {
    try {
        const municipalities = await apiClient.getPopularMunicipalities();
        const mountainPasses =  await apiClient.getPopularMountainPasses();

        this.setState({
          status: 'loaded',
          dataMunicipalities: municipalities,
          dataMountainPasses: mountainPasses,
        })

    } catch (error) {
       console.log(error)
    }
  }



  render() {
    const { status, dataMunicipalities, dataMountainPasses, dataRoutes  } = this.state;

    return (
      <>
        <Header />
        <main className="flex flex-col space-y-4">
          <SearchBar />
          { status === 'loading' && <p>data loading</p>}
          { status === 'loaded' && (
            <>
              <Container title={"Los mejores municipios para hacer un stage"}>
                 <PrintMunicipalityCard  data={dataMunicipalities} status={status}/>
              </Container>
              <Container title={"Los puertos de montaña que no te puedes perder"}>
                  <PrintMountainPassCard data={dataMountainPasses} />
              </Container>
              <Container title={"Rutas"}>
                <PrintRouteCard  data={dataRoutes}/>
              </Container>
            </>
          )}
          <div className="py-10 border-2">
            <p>Cycling Tips</p>
          </div>
        </main>
      </>
    )

  }
}

