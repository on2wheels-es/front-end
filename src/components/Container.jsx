import React, { Component } from 'react'

export class Container extends Component {
  render() {
    return (
      <div>
        <h1 className="mb-4">{this.props.title}</h1>
        <div className="flex w-full justify-around">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Container
