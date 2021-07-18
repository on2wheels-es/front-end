import React, { Component } from 'react'

export default class Card extends Component {
  render() { 
    return (
      <div className="max-w-md mx-auto border-2 rounded-xl w-3/12 shadow-md overflow-hidden md:max-w-2xl">
        {this.props.children}
      </div>
    )
  }
}

