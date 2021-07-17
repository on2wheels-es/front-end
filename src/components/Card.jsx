import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      img: ''
    }
  }

  componentDidMount() {
    this.renderGalleryItem()
    
  }
  
  renderGalleryItem = () => {
    const imageWidth = 620; // your desired image width in pixels
    const imageHeight = 320; // desired image height in pixels
    fetch(`https://source.unsplash.com/collection/${this.props.collectionID}/${imageWidth}x${imageHeight}/`)
    .then((response)=> { 
      this.setState({
        status: 'loaded',
        img: response.url
      }) 
    }) 
  }

  render() {
    const { status, img } = this.state;
    
    return (
      <div className="border-2 rounded-md w-3/12">
        <div>
          { status === 'loading' &&  <p>....loading</p>}
          { status === 'loaded' &&  <img src={img} className="object-cover" alt="gallery image"/>}
        </div>
        {this.props.children}
      </div>
    )
  }
}

