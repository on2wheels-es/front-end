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
            const userID = await this.props.user._id

            const response = await apiClient.getUser(userID);

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
        const { status } = this.state
        const providerStatusLoading = this.props.isLoading

        return (
          <>
            <Header />
            <main>
                {(status === 'loading' && providerStatusLoading) && <img src={gif} alt="gif" />}
                {(status === 'loaded' && !providerStatusLoading) && (
                    <>
                        <h1 className="h1_bold_medium mb-8 md:mb-12">Tus favoritos</h1>
                        <Container title={"Municipios"} id="#municipalities">
                            {this.printMunicipalities()}
                        </Container>
                        <Container title={"Puertos de Montaña"}>
                            {this.printMountainPasses()}
                        </Container>
                        <Container title={"Rutas"} id="#rutas">
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