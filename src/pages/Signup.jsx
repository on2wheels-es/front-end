import React, { Component } from "react";
import 'react-notifications/lib/notifications.css';
import { Link } from "react-router-dom";
import { withAuth } from "../providers/AuthProvider";
import signinImage from "../images/signin-image.jpg"


class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
    email: "",
    password: ""
  };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.signup({ email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const width = window.innerWidth;
    const breakpoint = 768;
    const bgImage = width >= breakpoint ? "bg-secundary-medium" : "signup-img"
    return (
      <div className="flex w-screen h-screen bg-secundary-medium overflow-hidden">
        <div className="hidden md:w-1/2 md:block">
          <img className="object-cover object-center w-full h-full" src={signinImage}/>
        </div>
        <div className={`wrapper w-full px-4 py-12 text-white md:px-12 md:w-1/2 md:h-screen ${bgImage}`}>
            <Link to="/"> 
               <p className="text-xs font-bold mb-8 md:text-white md:font-regular hover:underline">{`< Volver a la página`}</p>
            </Link>
            <div className="mx-auto px-4 py-8 rounded-lg bg-secundary-medium bg-opacity-75 md:bg-opacity-100 md:rounded-none md:px-0 md:py-0 md:w-9/12">
              <div className="py-4 mb-4">
                <h2 className="mb-2">Crea una cuenta nueva</h2>
              </div>
              <form className="flex flex-col space-y-6 pb-4" onSubmit={this.handleFormSubmit}>
                <div>
                  <label className="caption_regular_light">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    placeholder="Email"
                    onChange={this.handleChange} 
                    className="form-input" 
                  />
                </div>
                  <div>
                    <label className="caption_regular_light">Contraseña</label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Contraseña"
                      onChange={this.handleChange}
                      className="form-input"
                    />
                  </div>
                  <input className="button-accent-big" type="submit" value="Crea una nueva cuenta" />
              </form>
              <div className="flex my-6 items-center justify-between">
                  <hr className="w-5/12"></hr>
                  <p>O</p>
                  <hr className="w-5/12"></hr>
              </div>
              <Link to="/signup">
                <p className="link-as-button text-center">Ya tienes una cuenta? Accede a ella!</p>
              </Link>
            </div>
          </div>
      </div>
    );
  }
}


export default withAuth(Signup);
