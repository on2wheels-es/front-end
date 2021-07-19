import React, { Component } from 'react'

export class Container extends Component {
  render() {
    return (
      <div className="py-4">
        <h2 className="mb-4">{this.props.title}</h2>
        <div className="flex w-full justify-around space-x-2 ">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Container
