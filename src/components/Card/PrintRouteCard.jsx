import React, { Component } from 'react'
import Card from './Card';
import RouteCardContent from './Content/RouteCardContent';
// import apiClient from '../../services/apiClient';

export class PrintRouteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      status: true,
    }
  }

  async componentDidMount() {
    try {
       // Api Call TBD -> const response = await apiClient.***();
       this.setState({
        data: [
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
        ],
        loading: false
      })

    } catch (error) {
       console.log(error)
    }
  }

  render() {
    const { data, status } = this.state;

    return(
      <>
        {status && <p>Loading data</p>}
        {!status && data.map((dataPoint, index) => {
          return(
            <Card key={index}> 
              <RouteCardContent data={dataPoint} />
            </Card>
          )
        })}
      </>
    )
  }
}

export default PrintRouteCard;