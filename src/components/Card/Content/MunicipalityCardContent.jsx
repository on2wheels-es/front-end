/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export class MunicipalityCardContent extends Component {
  render() {
    const { municipality, province, routes_number: routesNumber } = this.props.data;
    return (
      <div className="inline-block flex flex-col w-72 h-96 max-w-xs bg-white hover:shadow-xl">
        <div>
          <img className="w-full object-cover " src="https://images.unsplash.com/photo-1561390368-a315cfe6833b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" styles={{"height": "320px", "width": "420px"}} alt="default image" />
        </div>
        <div className="p-5 md:h-48">
          <h3 className="tertiary_title_card">{municipality}</h3>
          <p className="caption_regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo parturient gravida malesuada.</p>
        </div>
      </div>
    )
  }
}

export default MunicipalityCardContent