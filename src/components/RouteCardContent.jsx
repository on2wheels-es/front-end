import React, { Component } from 'react'

export class RouteCardContent extends Component {
  render() {
    return (
        <div className="flex justify-evenly items-start w-full p-2">
          <div>
            <h2>Name</h2>
            <p>Distance</p>
          </div>
          <div>
            <p>Score</p>
          </div>
        </div>
    )
  }
}

export default RouteCardContent
