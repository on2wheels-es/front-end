import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
            <Link to={`/municipalities/${dataPoint._id}`}  key={index}>
              <Card key={index}> 
                <MunicipalityCardContent data={dataPoint} />
              </Card>
            </Link>
          )
        })}
      </>
    )
  }
}

export default PrintMunicipalityCard;
