import React, { Component } from 'react'

export class MountainPassCardContent extends Component {
  render() {
    return (
        <div className="flex flex-col w-full">
          <div className="md:flex-shrink-0">
            <img className=" w-full object-cover" src="https://images.unsplash.com/photo-1561390368-a315cfe6833b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" styles={{"height": "320px", "width": "420px"}} alt="default image" />
          </div>
          <div className="flex justify-between items-end p-4">
           <div className="h-1/5">
              <p className="text-lg font-bold">Name</p>
              <p className="subtitle">Province</p>
            </div>
            <div className="card-content-details">
              <p className="subtitle">Altitud</p>
              <p className="subtitle">Desnivel</p>
            </div>
          </div>
        </div>
    )
  }
}


export default MountainPassCardContent