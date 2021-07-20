import React from 'react'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Container from '../components/Container'
import PrintMountainPassCard from '../components/Card/PrintMountainPassCard'
import PrintMunicipalityCard from '../components/Card/PrintMunicipalityCard'
import PrintRouteCard from '../components/Card/PrintRouteCard'

function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col space-y-4">
        <SearchBar />
        <Container title={"Los mejores municipios para hacer un stage"}>
          <PrintMunicipalityCard />
        </Container>
        <Container title={"Los puertos de montaña que no te puedes perder"}>
          <PrintMountainPassCard />
        </Container>
        <Container title={"Rutas"}>
          <PrintRouteCard />
        </Container>
        <div className="py-10 border-2">
          <p>Cycling Tips</p>
        </div>
      </main>
    </>
  )
}

export default Home
