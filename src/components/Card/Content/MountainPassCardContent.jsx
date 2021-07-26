/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import LocationIcon from '../../iconsSVG/LocationIcon'
import AltitudeIcon from '../../iconsSVG/AltitudeIcon'

export class MountainPassCardContent extends Component {
  render() {
    const { name, province, altitude, mountain_slope: mountainSlope } = this.props.data;
    return (
      <div className="inline-block flex flex-col w-72 h-96 max-w-xs bg-white hover:shadow-xl">
        <div>
          <img className="w-full object-cover " src="https://images.unsplash.com/photo-1561390368-a315cfe6833b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" styles={{"height": "320px", "width": "420px"}} alt="default image" />
        </div>
        <div className="flex flex-col justify-around md:h-48 md:space-y-16 p-5">
          <p className="body_primary_semibold">{name}</p>
          <div className="flex flex-col">
            <LocationIcon text={province}/>
            <AltitudeIcon text={altitude}/>
          </div>
        </div>
      </div>
    )
  }
}


export default MountainPassCardContent