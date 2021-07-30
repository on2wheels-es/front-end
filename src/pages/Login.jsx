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
    return (
      <div className="flex w-screen h-screen bg-secundary-medium">
        <div className="hidden md:w-1/2 md:block">
        <path xmlns="http://www.w3.org/2000/svg" d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8    c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712    L143.492,221.863z"/>
          <img className="object-cover object-bottom w-full h-full" src={loginImage}/>
        </div>
        <div className="wrapper px-8 md:px-36 py-8 text-white md:w-1/2 md:h-screen bg-secundary-medium">
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
                <p className="text-center font-normal hover:font-heavy hover:text-primary-medium hover:underline focus:underline focus:text-primary-medium">Crea una nueva cuenta</p>
              </Link>
          </div>
        </div>
      </div>
		);
  }
}


export default withAuth(Login);
