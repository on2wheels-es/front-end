import React, { Component } from 'react'

export class MunicipalityCardContent extends Component {
  render() {
    return (
        <div className="flex flex-col w-full">
          <div className="object-cover">
            <img src="https://images.unsplash.com/photo-1561390368-a315cfe6833b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" styles={{"height": "320px", "width": "420px"}} alt="default image" />
          </div>
          <div className="flex justify-evenly items-start w-full">
           <div>
              <h2>Name</h2>
              <p>Province</p>
            </div>
            <div>
              <p>Nº of Routes</p>
              <p>Nº of Mountain Passes</p>
            </div>
          </div>
        </div>
    )
  }
}

export default MunicipalityCardContent