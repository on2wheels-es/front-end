import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

class Header extends Component {
	render() {
		const { user, isLoggedIn, logout } = this.props;
		console.log(user);

		return (
			<header className="py-2 mb-8 border-b bg-hero-image">
				<div className=" flex justify-between">
           <div className="site-title">
              <Link to="/">
			  	<p className="text-indigo-500">On<strong>2Wheels</strong></p>
			  </Link>
           </div>
					<nav>
						<ul className="flex justify-center p-0">
							{isLoggedIn ? (
								<>
									<Link to="/profile"><li  className="text-center py-1 px-4 ml-8 rounded-lg hover:bg-indigo-500 hover:underline">Hola, {user.firstName}</li></Link>
									<button onClick={logout} className="button-indigo">Cerrar sesión</button>
								</>
							) : (
								<>
									<Link to="/login"><li className="text-center py-1 px-3 ml-1 rounded-lg hover:bg-indigo-500 hover:underline">Mi cuenta</li></Link>
									<Link to="/signup"><li  className="text-center py-1 px-3 ml-1 rounded-lg hover:bg-indigo-500 hover:underline">Regístrate</li></Link>
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
