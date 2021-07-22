import React, { Component } from 'react'

import apiClient from '../services/apiClient';

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Container from '../components/Container'
import PrintMountainPassCard from '../components/Card/PrintMountainPassCard'
import PrintMunicipalityCard from '../components/Card/PrintMunicipalityCard'
import gif from '../images/bike-loading.gif';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state= {
      status: 'loading',
      dataMunicipalities: [],
      dataMountainPasses: [],
    }
  }

  async componentDidMount() {
    try {
        const municipalities = await apiClient.getPopularMunicipalities();
        const mountainPasses =  await apiClient.getPopularMountainPasses();

        this.setState({
          status: 'loaded',
          dataMunicipalities: municipalities,
          dataMountainPasses: mountainPasses,
        })

    } catch (error) {
       console.log(error)
    }
  }

  render() {
    const { status, dataMunicipalities, dataMountainPasses  } = this.state;

    return (
      <>
        <Header />
        <main className="flex flex-col space-y-4">
          <SearchBar />
          { status === 'loading' && <img src={gif} alt="gif" /> }
          { status === 'loaded' && (
            <>
              <Container title={"Los mejores municipios para hacer un stage"}>
                 <PrintMunicipalityCard data={dataMunicipalities}/>
              </Container>
              <Container title={"Los puertos de montaña que no te puedes perder"}>
                  <PrintMountainPassCard data={dataMountainPasses} />
              </Container>
            </>
          )}
          <div className="py-10 border-2">
            <p>Cycling Tips</p>
          </div>
        </main>
      </>
    )

  }
}

