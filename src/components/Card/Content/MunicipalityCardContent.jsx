/* eslint-disable camelcase */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Favourite from '../../Favourite';
import { formatNumber } from '../../../helpers'

export class MunicipalityCardContent extends Component {

  render() {
    const { municipality, _id, province, municipality_inhabitants } = this.props.data;
    return (
      <div className="inline-block flex w-96 h-44 md:flex-col md:w-72 md:h-96 bg-white hover:shadow-xl">
        <Link to={`/municipalities/${_id}`}>
          <img 
            className="object-cover w-40 h-full md:w-full md:h-auto" 
            src="https://images.unsplash.com/photo-1561390368-a315cfe6833b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" 
            styles={{"height": "320px", "width": "420px"}} 
            alt="default image" 
            />
        </Link>
        <div className="p-5 w-80 md:w-auto md:h-48">
          <h3 className="md:mb-4">{municipality}</h3>
          <div className="flex flex-col justify-between items-end">
              <p className="caption_regular">Municipio situado en {province} constituido por {formatNumber(municipality_inhabitants)} habitantes</p>
              <div className="mt-4 md:mt-8">
                <Favourite type="municipality" id={_id}/>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MunicipalityCardContent