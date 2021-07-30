import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withAuth } from "../providers/AuthProvider";
import Header from '../components/Header/Header'

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
      <>
      <Header />
			<div className="">
				<div className="text-center">
					<Link to="/">on2Wheels Logo</Link>
					<h2 className="mt-6 text-center font-extrabold text-gray-900">Login to your account</h2>
				</div>
				<form className="form" onSubmit={this.handleFormSubmit}>
					<div className="rounded-md shadow-sm flex-col space-y-2">
						<label className="block text-lg font-medium text-gray-700">Email</label>
						<input className="form-input" type="text" name="email" value={email} onChange={this.handleChange} />
						<label className="block text-lg font-medium text-gray-700">Password</label>
						<input
							type="password"
							name="password"
							value={password}
							onChange={this.handleChange}
							className="form-input"
						/>
					</div>
					<input className="button-indigo mt-6" type="submit" value="Login" />
				</form>
			</div>
      </>
		);
  }
}


export default withAuth(Login);
