import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import MountainPassDetail from './pages/MountainPassDetail';
import { withAuth } from './providers/AuthProvider';
import SearchResults from './components/searchResults';

class App extends Component {
	render() {
		return (
			<>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/results" component={SearchResults} />
					<Route exact path="/mountainPasses/:id" component={MountainPassDetail} />
					<AnonRoute path="/signup" component={Signup} />
					<AnonRoute path="/login" component={Login} />
					<PrivateRoute path="/profile" component={Profile} />
				</Switch>
			</>
		);
	}
}

export default withAuth(App);
