import React, { Component } from "react";
import 'react-notifications/lib/notifications.css';
import { Link } from "react-router-dom";
import { withAuth } from "../providers/AuthProvider";


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
			<div className="form-container">
				<div className="text-center">
					<Link to="/">on2Wheels Logo</Link>
					<h2 className="text-center font-extrabold text-gray-900">Register</h2>
				</div>
				<form className="form" onSubmit={this.handleFormSubmit}>
					<div className="rounded-md shadow-sm flex-col space-y-2">
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
					<input className="button-indigo mt-4" type="submit" value="Signup" />
				</form>
				<p className="font-xl font-bold mt-4 text-indigo-700">
					Already have account?
					<Link to={'/login'}> Login</Link>
				</p>
			</div>
		);
  }
}

export default withAuth(Signup);
