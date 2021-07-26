import React, { Component } from 'react'
import LocationIcon from '../../iconsSVG/LocationIcon'
import RouteDistance from '../../iconsSVG/RouteDistance'

export class RouteCardContent extends Component {
  render() {
    const { name, province, distance } = this.props.data;
    return (
      <div className="inline-block flex w-96 h-44 md:flex-col md:w-72 md:h-96 bg-white hover:shadow-xl">
        <div>
          <img className="object-cover w-40 h-full md:w-full md:h-auto" src="https://images.unsplash.com/photo-1561390368-a315cfe6833b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" styles={{"height": "320px", "width": "420px"}} alt="default image" />
        </div>
        <div className="flex flex-col justify-evenly md:justify-around w-80 px-5 md:h-48 md:p-5 md:relative">
          <div className="caption_regular font-bold bg-black w-2/6 md:w-auto md:px-5 text-white text-center border border-white md:absolute md:bottom-44 md:right-12">
            Fácil
          </div>
          <div className="flex flex-col space-y-6 md:space-y-16 md:mt-1">
            <p className="body_primary_semibold">{name}</p>
            <div className="flex flex-col">
              <LocationIcon text={province}/>
              <RouteDistance text={distance}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RouteCardContent
