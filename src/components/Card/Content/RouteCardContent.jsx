/* eslint-disable camelcase */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Favourite from '../../Favourite';
import AltitudeIcon from '../../iconsSVG/AltitudeIcon'
import RouteDistance from '../../iconsSVG/RouteDistance'
import { difficulty, formatNumber } from '../../../helpers'

export class RouteCardContent extends Component {

  formatTitleLength = (name) => {
    if(name.length > 30) {
      const title = name.substring(0, 30) + ' ...'
      return title
    } else {
      const title = name.split('.').join("");
      return title
    }
  }

  render() {
    const { name, gradient, distance, _id, difficulty_score } = this.props.data;
    return (
      <div className="inline-block flex h-44 md:flex-col md:w-72 md:h-96 bg-white hover:shadow-xl">
        <Link to={`/routes/${_id}`}>
          <img className="object-cover w-40 h-full md:w-full md:h-auto" src="https://images.unsplash.com/photo-1561390368-a315cfe6833b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" styles={{"height": "320px", "width": "420px"}} alt="default image" />
        </Link>
        <div className="flex flex-col justify-evenly w-80 px-5 md:w-auto md:justify-end md:h-48 md:p-5 md:relative">
          <div className="caption_regular font-bold bg-black w-2/6 md:w-auto md:px-5 text-white text-center border border-white md:absolute md:bottom-44 md:right-6">
            {difficulty(difficulty_score)}
          </div>
          <div className="flex flex-col space-y-1 md:space-y-8 md:mt-1">
            <h3>{this.formatTitleLength(name)}</h3>
            <div className="flex justify-between items-end">
              <div >
                <AltitudeIcon text={formatNumber(gradient)}/>
                <RouteDistance text={distance}/>
              </div>
              <div>
                <Favourite type="routes" id={_id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RouteCardContent
