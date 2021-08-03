import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NotFound extends Component {
    render() {
        return (
            <div className="flex w-screen h-screen px-8 py-8 notFound-gif overflow-hidden">
                <div className="mx-auto flex flex-col space-y-12 h-10/12 text-white justify-center">
                    <h1 className="text-huge">Uuuups!</h1>
                    <p className="h2_regular">Parece que nos hemos equivocado de ruta</p>
                    <Link to="/" >
                        <button className="button-accent-big" >Vuelve a la pagina de inicio</button>
                    </Link>
                </div>
          </div>
        )
    }
}

export default NotFound
