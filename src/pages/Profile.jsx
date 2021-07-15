import React, { Component } from 'react';

import { withAuth } from '../providers/AuthProvider';

class Profile extends Component {
	render() {
	  const { user } = this.props;

		return (
			<div>
				<h1>Welcome {user.firstName}</h1>
			</div>
		);
	}
}

export default withAuth(Profile);