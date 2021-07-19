import React, { Component } from 'react'

export default class Card extends Component {
  render() { 
    return (
      <div className="flex flex-nowrap lg:mr-8 md:mr-6 mr-5">
        {this.props.children}
      </div>
    )
  }
}

