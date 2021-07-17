import React, { Component } from 'react'

export class MountainPassCardContent extends Component {
  render() {
    return (
        <div className="flex justify-evenly items-start w-full">
          <div>
            <h2>Name</h2>
            <p>Province</p>
          </div>
          <div>
            <p>Altitud</p>
            <p>Desnivel</p>
          </div>
        </div>
    )
  }
}

export default MountainPassCardContent