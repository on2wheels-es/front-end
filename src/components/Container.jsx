import React, { Component } from 'react'

export class Container extends Component {
  render() {
    return (
      <div className="mb-12">
        <h2 className="mb-8 md:mb-12">{this.props.title}</h2>
        <div className="flex flex-col space-y-6 md:flex-row md:mx-0.5 md:space-y-0 overflow-x-scroll pb-4 no-scrollbar">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Container
