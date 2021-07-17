import React, { Component } from 'react'
import Card from './Card';
import MountainPassCardContent from './Content/MountainPassCardContent';
import MunicipalityCardContent from './Content/MunicipalityCardContent';
import RouteCardContent from './Content/RouteCardContent';

export class PrintCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true
    }
  }

  componentDidMount() {
      // Fetch data from the Api
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
          }
        ],
        loading: false
      })

  }

  printType = () => {
    switch (this.props.type) {
      case 'route':
        return <RouteCardContent />
      case 'municipality':
        return <MunicipalityCardContent />
      case 'mountainPass':
        return <MountainPassCardContent />
      default:
        return <RouteCardContent />
    }

  }

  render() {
    const { data, loading } = this.state;
    return(
      <>
        {loading && <p>Loading data</p>}
        {!loading && data.map((dataPoint, index) => {
          return(
            <Card key={index}> 
              {this.printType()}
            </Card>
          )
        })}
      </>
    )
  }

}

export default PrintCards;
