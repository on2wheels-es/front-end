import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../providers/AuthProvider";

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, email, password } = this.state;
    this.props.signup({ firstName, lastName, email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { firstName, lastName, email, password } = this.state;
    return (
			<div className="form-container">
				<div className="text-center">
					<p>on2Wheels Logo</p>
					<h2 className="mt-6 text-center font-extrabold text-gray-900">Login to your account</h2>
				</div>
				<form className="form" onSubmit={this.handleFormSubmit}>
					<div className="rounded-md shadow-sm flex-col space-y-2">
						<label className="block text-lg font-medium text-gray-700">Name</label>
						<input type="text" name="firstName" value={firstName} onChange={this.handleChange} className="form-input" />
						<label className="block text-lg font-medium text-gray-700">Last Name</label>
						<input type="text" name="lastName" value={lastName} onChange={this.handleChange} className="form-input" />
						<label className="block text-lg font-medium text-gray-700">Email:</label>
						<input type="email" name="email" value={email} onChange={this.handleChange} className="form-input" />
						<label className="block text-lg font-medium text-gray-700">Password</label>
						<input
							type="password"
							name="password"
							value={password}
							onChange={this.handleChange}
							className="form-input"
						/>
					</div>
					<input className="button-indigo mt-6" type="submit" value="Signup" />
				</form>
				<p className="font-xl font-bold mt-8 text-indigo-700">
					Already have account?
					<Link to={'/login'}> Login</Link>
				</p>
			</div>
		);
  }
}

export default withAuth(Signup);
