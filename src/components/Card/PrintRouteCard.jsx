import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Card from './Card';
import RouteCardContent from './Content/RouteCardContent';

export class PrintRouteCard extends Component {
  render() {
    const { data } = this.props;

    return(
      <>
        {data.map((dataPoint) => {
          return(
            <Link to={`/routes/${dataPoint._id}`} key={dataPoint._id}>
              <Card> 
                <RouteCardContent data={dataPoint} />
              </Card>
            </Link>
          )
        })}
      </>
    )
  }
}

export default PrintRouteCard;