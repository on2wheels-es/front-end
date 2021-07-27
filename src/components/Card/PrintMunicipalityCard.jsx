import React, { Component } from 'react'
import Card from './Card';
import MunicipalityCardContent from './Content/MunicipalityCardContent';

export class PrintMunicipalityCard extends Component {
  render() {
    const { data } = this.props;
    return(
      <>
        {data.map((dataPoint) => {
          return(
            <Card key={dataPoint._id}> 
              <MunicipalityCardContent data={dataPoint} />
            </Card>
          )
        })}
      </>
    )
  }
}

export default PrintMunicipalityCard;
