/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export class MunicipalityCardContent extends Component {
  render() {
    const { municipality, province, routes_number: routesNumber } = this.props.data;
    return (
      <div className="inline-block">
      <div className="flex flex-col w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl">
        <div className="md:flex-shrink-0">
          <img className="w-full object-cover" src="https://images.unsplash.com/photo-1561390368-a315cfe6833b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" styles={{"height": "320px", "width": "420px"}} alt="default image" />
        </div>
        <div className="flex justify-between items-end py-2 px-6">
          <div>
            <p className="text-md font-bold">{municipality}</p>
          </div>
          <div className="card-content-details">
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default MunicipalityCardContent