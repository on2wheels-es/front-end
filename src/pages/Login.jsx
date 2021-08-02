import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withAuth } from "../providers/AuthProvider";
import loginImage from "../images/login-page-image.jpg"

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    };
  }

  handleFormSubmit = async(event) => {
    event.preventDefault();
    const { email, password } = this.state;
    await this.props.login({
      email, 
      password
    })
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const width = window.innerWidth;
    const breakpoint = 768;
    const bgImage = width >= breakpoint ? "bg-secundary-medium" : "login-img"

    return (
      <div className="flex w-screen h-screen bg-secundary-medium overflow-hidden">
        <div className="hidden md:w-1/2 md:block">
          <img className="object-cover object-bottom w-full h-full" src={loginImage}/>
        </div>
        <div className={`wrapper w-full px-4 py-12 text-white md:px-12 md:w-1/2 md:h-screen ${bgImage}`}>
            <Link to="/"> 
               <p className="text-xs font-bold mb-8 md:text-white md:font-regular hover:underline">{`< Volver a la página`}</p>
            </Link>
            <div className="mx-auto px-4 py-8 rounded-lg bg-secundary-medium bg-opacity-75 md:bg-opacity-100 md:rounded-none md:px-0 md:py-0 md:w-9/12">
              <div className="py-4 mb-4">
                <h2 className="mb-2">Accede a tu cuenta</h2>
              </div>
              <form className="flex flex-col space-y-6 pb-4" onSubmit={this.handleFormSubmit}>
                <div>
                  <label className="caption_regular_light">Email</label>
                  <input 
                    className="form-input" 
                    type="text" 
                    name="email" 
                    placeholder="Email"
                    value={email} 
                    onChange={this.handleChange} />
                </div>
                <div>
                  <label className="caption_regular_light">Contsraseña</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Contraseña"
                    onChange={this.handleChange}
                    className="form-input"
                  />
                </div>
                <input className="button-accent-big" type="submit" value="Accede a tu cuenta" />
              </form>
              <div className="flex my-6 items-center justify-between">
                <hr className="w-5/12"></hr>
                <p>O</p>
                <hr className="w-5/12"></hr>
              </div>
              <Link to="/signup">
                <p className="link-as-button text-center">Crea una nueva cuenta</p>
              </Link>
          </div>
        </div>
      </div>
		);
  }
}


export default withAuth(Login);
