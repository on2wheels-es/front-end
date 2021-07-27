import React, { Component } from 'react'
import Card from './Card';
import MountainPassCardContent from './Content/MountainPassCardContent';

export class PrintMountainPassCard extends Component {
  render() {
    const { data } = this.props;
    return(
      <>
        {data.map((dataPoint) => {
          return(
              <Card key={dataPoint._id}> 
                <MountainPassCardContent data={dataPoint} />
              </Card>
          )
        })}
      </>
    )
  }
}

export default PrintMountainPassCard;
