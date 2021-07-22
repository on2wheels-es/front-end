import React, { Component } from 'react';
import Header from '../components/Header'

import { withAuth } from '../providers/AuthProvider';

class Profile extends Component {
	render() {
	  const { user } = this.props;

		return (
			<>
				<Header />
				<div>
					<h1>Welcome {user.email}</h1>
				</div>
			</>
		);
	}
}

export default withAuth(Profile);
