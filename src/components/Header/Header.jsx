import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { avatar } from '../../helpers'
import { withAuth } from '../../providers/AuthProvider';
import logo from '../../images/logo-transparent.png'
import like from '../../images/like-white.png'

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
								<img className="w-40" src={logo} alt="on2wheels logo" />
							</Link>
						</div>
						<nav>
							<ul className="flex justify-center items-center p-0">
								{isLoggedIn ? (
									<>
										<Link to="/favourites">
											<li className="mr-4 md:mr-8">
												<img  src={like} alt="favourites button" className="object-fit w-8 mt-1" />
											</li>
										</Link>
										<Link to="/profile">
											<img  src={avatar(user.gender)} alt="avatar image" className="object-fit w-10 mt-1" />
										</Link>
									</>
								) : (
									<>
										<Link to="/login"><li className="button text-neutral-medium">Mi cuenta</li></Link>
										<Link to="/signup"><li className="button-accent-small">Regístrate</li></Link>
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
