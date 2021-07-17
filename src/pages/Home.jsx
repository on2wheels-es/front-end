import React from 'react'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Card from '../components/Card'
import RouteCardContent from '../components/RouteCardContent'
import MountainPassCardContent from '../components/MountainPassCardContent'
import MunicipalityCardContent from '../components/MunicipalityCardContent'

function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col space-y-4">
        <SearchBar />
        <h2> Routes </h2>
        <Card collectionID={596418}> 
          <RouteCardContent />
        </Card>
        <h2> Municipalities </h2>
        <Card collectionID={1123592}> 
          <MunicipalityCardContent />
        </Card>
        <h2> Mountain Passes </h2>
        <Card collectionID={148982}> 
          <MountainPassCardContent />
        </Card>
        <div className="py-10 border-2">
          <p>SearchBar Component</p>
        </div>
        <div className="py-10 border-2">
          <p>Popular Locations Component</p>
        </div>
        <div className="py-10 border-2">
          <p>Popular Mountain Passes</p>
        </div>
        <div className="py-10 border-2">
          <p>Cycling Tips</p>
        </div>
      </main>
    </>
  )
}

export default Home
