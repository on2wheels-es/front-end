import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Card from './Card';
import MountainPassCardContent from './Content/MountainPassCardContent';

export class PrintMountainPassCard extends Component {

  render() {
    const { data } = this.props;

    return(
      <>
        {data.map((dataPoint) => {
          return(
            <Link to={`/mountainPasses/${dataPoint._id}`}  key={dataPoint._id}>
              <Card> 
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
