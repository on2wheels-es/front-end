import React, { Component } from 'react'

export class Container extends Component {
  render() {
    return (
      <div className="mb-12">
        <h2 className="mb-12">{this.props.title}</h2>
        <div className="flex mx-0.5 overflow-x-scroll pb-4 no-scrollbar">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Container
