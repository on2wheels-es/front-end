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
    const pathToRedirect = this.props.location.state.previousPath
    await this.props.login({
      email, 
      password,
      pathToRedirect
    })
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
          <img className="object-cover object-bottom w-full h-full" src={loginImage}/>
        </div>
        <div className="wrapper px-8 py-8 text-white bg-secundary-medium md:px-36 md:w-1/2 md:h-screen">
            <Link to="/"> 
               <p className="mb-8 hover:underline">{`< Volver a la página`}</p>
            </Link>
            <div className="mx-auto">
              <div className="py-8 border-b mb-8">
                <h2 className="mb-4">Accede a tu cuenta</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Non ac imperdiet ullamcorper lacus. Duis.</p>
              </div>
              <form className="flex flex-col space-y-8" onSubmit={this.handleFormSubmit}>
                <div>
                  <label className="caption_regular_light">Email</label>
                  <input 
                    className="form-input" 
                    type="text" 
                    name="email" 
                    value={email} 
                    onChange={this.handleChange} />
                </div>
                <div>
                  <label className="caption_regular_light">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
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
