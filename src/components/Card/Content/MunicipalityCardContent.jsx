import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Favourite from '../../Favourite';

export class MunicipalityCardContent extends Component {
  render() {
    const { municipality, _id } = this.props.data;
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
          <h3>{municipality}</h3>
          <p className="caption_regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <Favourite type="municipality" id={_id}/>
      </div>
    )
  }
}

export default MunicipalityCardContent