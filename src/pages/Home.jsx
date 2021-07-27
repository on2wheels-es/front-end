import React, { Component } from 'react'

import apiClient from '../services/apiClient';

import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar'
import Container from '../components/Container'
import PrintMountainPassCard from '../components/Card/PrintMountainPassCard'
import PrintMunicipalityCard from '../components/Card/PrintMunicipalityCard'
import gif from '../images/bike-loading.gif';
import Footer from '../components/Footer';
import Map from '../components/Map';
import RoutesIcon from '../components/iconsSVG/RoutesIcon';
import MountainPassesIcon from '../components/iconsSVG/MountainPassesIcon';

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
    const { status, dataMunicipalities, dataMountainPasses } = this.state;
    const stylesHeader = 'relative pb-64 mb-60';

    return (
      <>
        <Header homeHeader={stylesHeader}>
            <div className="text-neutral-medium mt-14 mb-8 md:mb-16 md:mt-32 md:text-center md:mx-auto md:w-9/12">
              <h1 className="mb-2 md:mb-10">Descubre tu ruta</h1>
              <p className="text-s md:text-s leading-short">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <SearchBar />
            <div className="w-11/12 md:w-9/12 mx-auto h-3/5 overflow-hidden absolute top-2/3 inset-x-2">
                { status === 'loading' && <img src={gif} alt="gif" /> }
                {status === 'loaded' && 
                  <Map data={dataMunicipalities} zoom={4.7}>
                    <RoutesIcon text={dataMunicipalities.routes_number} />
                    <MountainPassesIcon text={dataMunicipalities.length} />
                 </Map>
                }
            </div>
        </Header>
        <main>
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
          </main>
          <Footer />
      </>
    )

  }
}

