import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Card from './Card';
import MountainPassCardContent from './Content/MountainPassCardContent';
import apiClient from '../../services/apiClient';

export class PrintMountainPassCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      status: true,
    }
  }

  async componentDidMount() {
    try {
        const response = await apiClient.getPopularMountainPasses();
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
        {!status && data.map((dataPoint) => {
          return(
            <Link to={`/mountainPasses/${dataPoint._id}`}  key={dataPoint._id}>
              <Card key={dataPoint._id}> 
                <MountainPassCardContent data={dataPoint} />
              </Card>
            </Link>
          )
        })}
      </>
    )
  }
}

export default PrintMountainPassCard;
