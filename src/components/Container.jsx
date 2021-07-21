import React, { Component } from 'react'

export class Container extends Component {
  render() {
    return (
      <div >
        <h2 className="mb-4">{this.props.title}</h2>
        <div className="flex mx-0.5 overflow-x-scroll pb-10 no-scrollbar">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Container
