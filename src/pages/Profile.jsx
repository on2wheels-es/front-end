import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import NewUserModal from '../components/UserProfile/NewUserModal';
import EditProfileForm from '../components/UserProfile/EditProfileForm';
import { withAuth } from '../providers/AuthProvider';
import RoutesIcon from '../components/iconsSVG/RoutesIcon'
import LocationIcon from '../components/iconsSVG/LocationIcon'
import MountainPassesIcon from '../components/iconsSVG/MountainPassesIcon'
import Footer from '../components/Footer';
import { avatar } from '../helpers'

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state= {
			mode: 'view',
      popUpOpen: false,
		}
	}

  componentDidMount() {
    const { isNewUser } = this.props.user;
    if( isNewUser ) {
      this.setState({
        popUpOpen: true
      })
    }
  }

  handleClosePopUp = () => {
    this.setState({
        popUpOpen: false,
    })
  }

  changeToEditMode = () => {
    this.setState({
      mode: 'edit'
    })
  }

  changeToViewMode = () => {
    this.setState({
      mode: 'view'
    })
  }

	handleChange = (e) => {
		this.setState({
		  [e.target.name]: e.target.value,
		})
	}

	render() {
	  const { user: { firstName, lastName, birthday, gender, favouriteRoutes, favouritePasses, favouriteLocations }, logout } = this.props;
    const { popUpOpen } = this.state;
    const view = this.state.mode === 'view';

		return (
			<>
				<Header />
				<main className="md:py-12">
					{ popUpOpen && <NewUserModal onPopUpClose={this.handleClosePopUp}/>}
          
                <div className="flex flex-col space-y-8 w-full items-center md:space-y-8 md:flex-row md:items-start">
                    <div className="w-full flex justify-center md:w-1/5 md:items-start md:mr-20" >
                      <img className="w-1/2  md:w-10/12" src={avatar(gender)} alt="profile picture" />
                    </div>
           { view ? 
                  (
                      <div className="flex flex-col w-full mx-auto md:items-start md:w-3/4 space-y-8">
                        <h1 className="mb-2">{firstName || 'Nombre'} {lastName}</h1>
                        <div>
                          <h3 className="mb-4">Elementos guardados</h3>
                          <div className="flex flex-col space-y-4 md:flex-row md:items-start md:space-y-0 md:space-x-8">
                            <Link to="/favourites">
                              <div className="button-border">
                                <RoutesIcon title={'Rutas: '} text={favouriteRoutes.length || 0}/>
                              </div>
                            </Link>
                            <Link to="/favourites">
                              <div className="button-border">
                                <MountainPassesIcon title={'Puertos: '}text={favouritePasses.length || 0} />
                              </div>
                            </Link>
                            <Link to="/favourites">
                              <div className="button-border">
                                <LocationIcon  title={'Muncipios: '} text={favouriteLocations.length || 0}/>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="w-full space-y-4">
                            <h3>Información personal</h3>
                            <div className="flex flex-col">
                              <label>Nombre</label>
                              <input 
                                type="text" 
                                name="fisrtName" 
                                value={firstName || 'Nombre'} 
                                placeholder={firstName || 'Nombre'} 
                                className="form-input-view"
                                readOnly
                              />
                            </div>
                            <div className="flex flex-col">
                              <label>Nombre</label>
                              <input 
                                type="text" 
                                name="fisrtName" 
                                value={lastName || 'Apellido'} 
                                placeholder={lastName || 'Apellido'} 
                                className="form-input-view"
                                readOnly
                              />
                            </div>
                            <div className="flex flex-col">
                              <label>Fecha de nacimiento</label>
                              <input 
                                type="text" 
                                name="birthday" 
                                value={birthday || 'Fecha de nacimiento'} 
                                placeholder={birthday || 'Fecha de nacimiento'} 
                                className="form-input-view"
                                readOnly
                              />
                            </div>
                            <div className="flex flex-col">
                              <label>Género</label>
                              <input 
                                type="text" 
                                name="gender" 
                                value={gender || 'Género'} 
                                placeholder={gender || 'Género'} 
                                className="form-input-view"
                                readOnly
                              />
                            </div>
                          </div>
                          <button className="button-accent-big" onClick={this.changeToEditMode}>Editar información</button>
                          <button className="button-border" onClick={logout}>Cerrar sessión</button>
                      </div>
                  )
                :
                  (< EditProfileForm cancelEditMode={this.changeToViewMode}/>) 
            }
          </div>
				</main>
        <Footer />
			</>
		);
	}
}

export default withAuth(Profile);
