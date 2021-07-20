import React, { Component } from 'react'

export default class Card extends Component {
  render() { 
    return (
      <div className="flex flex-nowrap ml-1 lg:mr-7 md:mr-5 mr-4">
        {this.props.children}
      </div>
    )
  }
}

