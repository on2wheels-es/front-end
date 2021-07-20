import React, { Component } from 'react'
import Card from './Card';
import MunicipalityCardContent from './Content/MunicipalityCardContent';
import apiClient from '../../services/apiClient';

export class PrintMunicipalityCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      status: true,
    }
  }

  async componentDidMount() {
    try {
        const response = await apiClient.getPopularMunicipalities();
        this.setState({
            data: response,
            status: false
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
              <MunicipalityCardContent data={dataPoint} />
            </Card>
          )
        })}
      </>
    )
  }
}

export default PrintMunicipalityCard;
