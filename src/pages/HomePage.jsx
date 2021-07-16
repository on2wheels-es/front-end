import React from 'react'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col space-y-4">
        <SearchBar />
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

export default HomePage
