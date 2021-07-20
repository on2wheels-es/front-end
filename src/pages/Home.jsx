import React from 'react'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Container from '../components/Container'
import PrintCards from '../components/Card/PrintCards'

function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col space-y-4">
        <SearchBar />
        <Container title={"Los 8 municipios más recomendados para hacer un stage"}>
          <PrintCards type="municipality"/>
        </Container>
        <Container title={"Los puertos de montaña que no te puedes perder"}>
          <PrintCards type="mountainPass"/>
        </Container>
        <Container title={"Rutas"}>
          <PrintCards type="routes"/>
        </Container>
        <div className="py-10 border-2">
          <p>Cycling Tips</p>
        </div>
      </main>
    </>
  )
}

export default Home
