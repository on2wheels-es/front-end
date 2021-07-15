import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withAuth } from '../providers/AuthProvider';

class Header extends Component {
	render() {
		const { user, isLoggedIn, logout } = this.props;
		return (
			<header className="py-2 mb-8">
				<div className=" flex justify-between">
           <div className="site-title">
              <p>On2Wheels</p>
              <p className="subtitle">Stage planner for cycling 🚴‍♂️</p>
           </div>
					<nav>
						<ul className="flex justify-center p-0">
							{isLoggedIn ? (
								<>
									<Link to="/profile"><li  className="text-center py-1 px-4 ml-8 rounded-lg hover:bg-indigo-500 hover:underline">Hi, {user.firstName}</li></Link>
									<button onClick={logout} className="button-indigo">Logout</button>
								</>
							) : (
								<>
									<Link to="/login"><li className="text-center py-1 px-3 ml-1 rounded-lg hover:bg-indigo-500 hover:underline focus:ring-2 focus:ring-purple-600 focus:border-transparent">Login</li></Link>
									<Link to="/signup"><li  className="text-center py-1 px-3 ml-1 rounded-lg hover:bg-indigo-500 hover:underline">Signup</li></Link>
								</>
							)}
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}

export default withAuth(Header);
