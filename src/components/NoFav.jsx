import React, { Component } from 'react'
import noResults from '../images/no-results.jpeg';
import { Link } from 'react-router-dom';

class NoFav extends Component {

    render() {
        return (
          <>
            <img src={noResults} alt="broken-bike" />
            <p>Aún no tienes {this.props.type}</p>
            <button className="button-accent-searchBar"> 
                <Link to="/">Explora</Link>
            </button>
          </>
        )
    }
}

export default NoFav;