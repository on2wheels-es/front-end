import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withAuth } from '../../providers/AuthProvider';

class Header extends Component {
	render() {
		const { isLoggedIn } = this.props;
		const homeStyles = this.props.homeHeader ? this.props.homeHeader : '';
		return (
			<header className={`py-2 mb-2 bg-secundary-medium ${homeStyles}`}>
				<div className="wrapper">
					<div className="flex justify-between items-center">
						<div className="site-title">
							<Link to="/">
								<p className="text-neutral-medium">On<strong>2Wheels</strong></p>
							</Link>
						</div>
						<nav>
							<ul className="flex justify-center p-0">
								{isLoggedIn ? (
									<>
										<Link to="/profile"><li  className="button text-neutral-medium mr-2">Profile</li></Link>
										<Link to="/favourites"><li  className="button text-neutral-medium mr-2">Favoritos</li></Link>
									</>
								) : (
									<>
										<Link to="/login"><li className="button text-neutral-medium mr-2">Mi cuenta</li></Link>
										<Link to="/signup"><li  className="button-accent">Regístrate</li></Link>
									</>
								)}
							</ul>
						</nav>
					</div>
					<div >
						{this.props.children}
					</div>
				</div>
			</header>
		);
	}
}

export default withAuth(Header);
