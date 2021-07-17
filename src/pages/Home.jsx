import React from 'react'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Container from '../components/Container'
import PrintCards from '../components/PrintCards'

function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col space-y-4">
        <SearchBar />
        <Container title={"Popular Mountain Pass"}>
          <PrintCards type="mountainPass"/>
        </Container>
        <Container title={"Popular Municipalities"}>
          <PrintCards type="municipality"/>
        </Container>
        <div className="py-10 border-2">
          <p>Cycling Tips</p>
        </div>
      </main>
    </>
  )
}

export default Home
