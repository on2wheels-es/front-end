import React, { Component } from 'react'

export class MountainPassCardContent extends Component {
  render() {
    return (
        <div className="inline-block">
          <div className="flex flex-col w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl">
            <div className="md:flex-shrink-0">
              <img className=" w-full object-cover" src="https://images.unsplash.com/photo-1561390368-a315cfe6833b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" styles={{"height": "320px", "width": "420px"}} alt="default image" />
            </div>
            <div className="flex justify-between items-end p-4">
            <div className="h-1/5">
                <p className="text-md font-bold">Name</p>
                <span className="flex items-center text-sm" aria-label="Provincia del municipio" role="img">
                  <span className="flex items-end mr-1 mt-1">
                    <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{"height": "9px", "width": "9px", "fill": "currentcolor"}}>
                      <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"></path>
                    </svg></span>
                  <span className="subtitle" aria-hidden="true">Provincia</span>
                </span>
              </div>
              <div className="card-content-details">
                <span className="flex items-center text-sm" aria-label="Altitud del municipio" role="img">
                  <span className="flex items-end mr-1 mt-1">
                    <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{"height": "9px", "width": "9px", "fill": "currentcolor"}}>
                      <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"></path>
                    </svg></span>
                  <span className="subtitle" aria-hidden="true">Altitud</span>
                </span>
                <span className="flex items-center text-sm" aria-label="Desnivel del municipio" role="img">
                  <span className="flex items-end mr-1 mt-1">
                    <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{"height": "9px", "width": "9px", "fill": "currentcolor"}}>
                      <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"></path>
                    </svg></span>
                  <span className="subtitle" aria-hidden="true">Desnivel</span>
                </span>
              </div>
            </div>
          </div>
        </div>
    )
  }
}


export default MountainPassCardContent