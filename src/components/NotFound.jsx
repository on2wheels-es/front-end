import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'

export class NotFound extends Component {
    render() {
        return (
            <>
            <Header />
            <main>
                <div className="flex flex-col space-y-8 px-8 py-20 md:p-16 mx-auto h-full">
                    <h2 className="h1_bold_medium">Uuuups!</h2>
                    <p className="h2_regular">Parece que nos hemos equivocado de ruta</p>
                    <Link to="/" >
                        <button className="button-accent" >Vuelve a la página de inicio</button>
                    </Link>
                 </div>
            </main>
            <Footer />
           </>
        )
    }
}

export default NotFound
