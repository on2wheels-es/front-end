import React, { Component } from 'react'
import PrintMunicipalityCard from '../components/Card/PrintMunicipalityCard';
import PrintMountainPassCard from '../components/Card/PrintMountainPassCard';
import PrintRouteCard from '../components/Card/PrintRouteCard';
import Container from '../components/Container';
import Header from '../components/Header/Header';
import NoFav from '../components/NoFav';
import apiClient from '../services/apiClient';
import gif from '../images/bike-loading.gif';
import Footer from '../components/Footer';
import { withAuth } from "../providers/AuthProvider";

class Favourites extends Component {

    constructor(props) {
        super(props);
        this.state= {
            status: 'loading',
            favouriteMunicipalities: undefined,
            favouritePasses: undefined,
            favouriteRoutes: undefined,
        }
    }

    async componentDidMount() {
        try {
            const userID = '60fbd8e5380c340eac216678' // this.props.user._id

            const response = await apiClient.getUser(userID);
            console.log(response)
            this.setState({
                status: 'loaded',
                favouriteMunicipalities: response.favouriteLocations,
                favouritePasses: response.favouritePasses,
                favouriteRoutes: response.favouriteRoutes,
            })
        } catch(error) {
            console.log(error)
        }
    }

    printMunicipalities = () => {
        const { favouriteMunicipalities } = this.state

        if (favouriteMunicipalities.length === 0) {
            return(
                <>
                    <NoFav type='Municipios'/>
                </>
            )
        } else {
            return (
                <>
                    <PrintMunicipalityCard data={favouriteMunicipalities} />
                </>
            )
        }
    }

    printMountainPasses = () => {
        const { favouritePasses } = this.state

        if (favouritePasses.length === 0) {
            return(
                <>
                    <NoFav type='Puertos de Montaña'/>
                </>
            )
        } else {
            return (
                <>
                    <PrintMountainPassCard data={favouritePasses} />
                </>
            )
        }
    }

    printRoutes = () => {
        const { favouriteRoutes } = this.state

        if (favouriteRoutes.length === 0) {
            return(
                <>
                    <NoFav type='Rutas'/>
                </>
            )
        } else {
            return (
                <>
                    <PrintRouteCard data={favouriteRoutes} />
                </>
            )
        }
    }

    render() {
        const { favouriteMunicipalities, favouritePasses, favouriteRoutes, status } = this.state
        console.log(favouriteMunicipalities, favouritePasses, favouriteRoutes)
        return (
          <>
            <Header>
                <div className="text-neutral-medium mt-10 mb-4 md:mt-16 md:mb-8 md:w-9/12">
                    <h1 className="mb-2 md:mb-10">Favoritos</h1>
                </div>
            </Header>
            <main>
                {status === 'loading' && <img src={gif} alt="gif" />}
                {status === 'loaded' && (
                    <>
                        <Container title={"Municipios"}>
                            {this.printMunicipalities()}
                        </Container>
                        <Container title={"Puertos de Montaña"}>
                            {this.printMountainPasses()}
                        </Container>
                        <Container title={"Rutas"}>
                            {this.printRoutes()}
                        </Container>
                    </>
                )}
              </main>
              <Footer />
          </>
        )
    }
}

export default withAuth(Favourites)