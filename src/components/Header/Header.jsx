import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { avatar } from '../../helpers'

import { withAuth } from '../../providers/AuthProvider';

class Header extends Component {
	render() {
		console.log(this.props)
		const { isLoggedIn, user } = this.props;
		const homeStyles = this.props.homeHeader ? this.props.homeHeader : 'bg-secundary-medium';
		return (
			<header className={`py-2 mb-2 ${homeStyles}`}>
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
										<Link to="/favourites"><li className="button text-neutral-medium mr-2">Favoritos</li></Link>
										<Link to="/profile">
											<img  src={avatar(user.gender)} alt="avatar image" className="object-fit w-9 mt-1" />
										</Link>
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
