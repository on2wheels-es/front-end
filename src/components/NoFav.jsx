import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import bikeNoFav from '../images/bikeNotFav.png'

class NoFav extends Component {

    render() {
        return (
          <div className="flex flex-col items-center space-y-4 md:flex-row">
            <div className="w-28">
              <img src={bikeNoFav} alt="Not favourites yet" />
            </div>
            <div className="flex flex-col space-y-4 text-center md:text-left md:ml-12 ">
              <h3>Aún no has añadido {this.props.type}</h3>
              <p>Haz clic en el corazón para añadir a favoritos.</p>
              <button className="button-accent w-1/3 self-center md:self-start"> 
                  <Link to="/">Explora</Link>
              </button>
            </div>
          </div>
        )
    }
}

export default NoFav;