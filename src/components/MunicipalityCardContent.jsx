import React, { Component } from 'react'

export class MunicipalityCardContent extends Component {
  render() {
    return (
        <div className="flex justify-evenly items-start w-full">
          <div>
            <h2>Name</h2>
            <p>CCAA</p>
          </div>
          <div>
            <p>nº Routes</p>
            <p>nº Mountain Passes</p>
          </div>
        </div>
    )
  }
}

export default MunicipalityCardContent