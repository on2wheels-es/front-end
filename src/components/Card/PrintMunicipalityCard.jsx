import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Card from './Card';
import MunicipalityCardContent from './Content/MunicipalityCardContent';

export class PrintMunicipalityCard extends Component {


  render() {
    const { data } = this.props;

    return(
      <>
        {data.map((dataPoint) => {
          return(
            <Link to={`/municipalities/${dataPoint._id}`}  key={dataPoint._id}>
              <Card key={dataPoint._id}> 
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
