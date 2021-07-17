import React, { Component } from 'react'

export default class Card extends Component {
  render() { 
    return (
      <div className="border-2 rounded-md w-3/12">
        {this.props.children}
      </div>
    )
  }
}

