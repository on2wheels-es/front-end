import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import { withAuth } from './providers/AuthProvider';

class App extends Component {
	render() {
		const { isLoading } = this.props;
		if (isLoading) {
			return <div>loading ... </div>;
		}
		return (
			<>
				<Navbar />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<AnonRoute path="/signup" component={Signup} />
					<AnonRoute path="/login" component={Login} />
					<PrivateRoute path="/profile" component={Profile} />
				</Switch>
			</>
		);
	}
}

export default withAuth(App);
