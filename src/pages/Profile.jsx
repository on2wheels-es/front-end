import React, { Component } from 'react';
import Header from '../components/Header/Header';
import UserDetailsPopUp from '../components/UserDetailsPopUp';

import { withAuth } from '../providers/AuthProvider';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state={
			popupOpen: true,
		}
	}

	render() {
	  const { user } = this.props;

		return (
			<>
				<Header />
				<div>
					<h1>Welcome {user.email}</h1>
					<UserDetailsPopUp />
				</div>
			</>
		);
	}
}

export default withAuth(Profile);
