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
    return (
      <div className="flex w-screen h-screen bg-secundary-medium overflow-hidden">
        <div className="hidden md:w-1/2 md:block">
          <img className="object-cover object-center w-full h-full" src={signinImage}/>
        </div>
        <div className="wrapper px-8 py-8 text-white bg-secundary-medium md:px-36 md:w-1/2 md:h-screen lg:py-32">
            <Link to="/"> 
               <p className="mb-8 hover:underline">{`< Volver a la página`}</p>
            </Link>
            <div className="mx-auto">
              <div className="py-8 border-b mb-8">
                <h2 className="mb-4">Crea una cuenta nueva</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Non ac imperdiet ullamcorper lacus. Duis.</p>
              </div>
              <form className="flex flex-col space-y-8" onSubmit={this.handleFormSubmit}>
                <div>
                  <label className="caption_regular_light">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={this.handleChange} 
                    className="form-input text-black" 
                  />
                </div>
                  <div>
                    <label className="caption_regular_light">Contraseña</label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                      className="form-input text-black"
                    />
                  </div>
                  <input className="button-accent-big" type="submit" value="Crear cuenta" />
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
