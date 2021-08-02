import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="bg-secundary-medium text-neutral-medium text-center mt-16">
          <div className="flex flex-col justify-evenly h-52 w-full md:w-1/2 mx-auto py-4 px-8 md:px-20">
            <Link to="/" >
				<p className="h3_bold pb-2">On<strong>2Wheels</strong></p>
			</Link>
            <div className="flex justify-center space-x-4 md:space-x-8 pb-6 border-b-2 ">
                <Link to="#">
                    <p className="footer_links">Contacto</p>
                </Link>
                <Link to="#" >
                    <p className="footer_links">Sobre nosotros</p>
                </Link>
            </div>
            <div className="flex justify-center space-x-4 md:space-x-8">
                <Link to="#">
                    <p className="caption_regular_light">Política de cookies</p>
                </Link>
                <Link to="#">
                    <p className="caption_regular_light">Terminos y condiciones</p>
                </Link>
            </div>
          </div>
        </footer>
    )
}

export default Footer
