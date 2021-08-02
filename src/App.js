import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withAuth } from './providers/AuthProvider';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Profile from './pages/Profile';
import Favourites from './pages/Favourites';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import MountainPassDetail from './pages/MountainPassDetail';
import SearchResults from './pages/SearchResults';
import MunicipalityDetail from './pages/MuncipalityDetail';
import RouteDetail from './pages/RouteDetail';
import NotFound from './components/NotFound'

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
					<AnonRoute path="/login" redirect='/profile' component={Login} />
					<PrivateRoute path="/profile" component={Profile} />
					<PrivateRoute path="/favourites" component={Favourites} />
					<Route  component={NotFound} />
				</Switch>
				<NotificationContainer />
			</>
		);
	}
}

export default withAuth(App);
