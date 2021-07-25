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
import SearchResults from './pages/SearchResults';
import MunicipalityDetail from './pages/MuncipalityDetail';
import RouteDetail from './pages/RouteDetail';

class App extends Component {
	render() {
		return (
			<>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/search" component={SearchResults} />
					<Route exact path="/mountainPasses/:id" component={MountainPassDetail} />
					<Route exact path="/municipalities/:id" component={MunicipalityDetail} />
					<Route exact path="/routes/:id" component={RouteDetail} />
					<AnonRoute path="/signup"  redirect='/profile' component={Signup} />
					<AnonRoute path="/login" redirect='/' component={Login} />
					<PrivateRoute path="/profile" component={Profile} />
				</Switch>
			</>
		);
	}
}

export default withAuth(App);
