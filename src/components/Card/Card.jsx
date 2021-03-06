import React, { Component } from 'react'

export default class Card extends Component {
  render() { 
    return (
      <div className="flex flex-nowrap border-2 border-black rounded-md ml-1 mr-2.5">
        {this.props.children}
      </div>
    )
  }
}

