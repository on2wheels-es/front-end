import React, { Component } from 'react'

import Card from './Card';
import RouteCardContent from './Content/RouteCardContent';

export class PrintRouteCard extends Component {
  render() {
    const { data } = this.props;

    return(
      <>
        {data.map((dataPoint) => {
          return(
            <Card key={dataPoint._id}> 
               <RouteCardContent data={dataPoint}/>
            </Card>
          )
        })}
      </>
    )
  }
}

export default PrintRouteCard;