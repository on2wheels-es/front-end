import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.status = {
      img: "not loaded"
    }
  }

  /*
  renderGalleryItem = () => {
    const numItemsToGenerate = 20; // how many gallery items you want on the screen
    const imageWidth = 480; // your desired image width in pixels
    const imageHeight = 480; // desired image height in pixels
    const collectionID = 1163637; // the collection ID from the original url
    fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/`)
    .then((response)=> { 
      this.setState({
        img: 'loaded'
      })
      console.log(response.url) 
      return <img src={response.url} alt="gallery image"/>  
    }) 
  }
 */



  render() {
    
    return (
      <div>
        
        
      </div>
    )
  }
}

