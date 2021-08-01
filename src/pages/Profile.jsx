import React, { Component } from 'react';
import Header from '../components/Header/Header';
import NewUserModal from '../components/UserProfile/NewUserModal';
import EditProfileForm from '../components/UserProfile/EditProfileForm';
import { withAuth } from '../providers/AuthProvider';
import RoutesIcon from '../components/iconsSVG/RoutesIcon'
import LocationIcon from '../components/iconsSVG/LocationIcon'
import MountainPassesIcon from '../components/iconsSVG/MountainPassesIcon'

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
    console.log('edit mode')
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
	  const { user: { firstName, lastName, birthday, gender, favouriteRoutes, favouritePasses, favouriteLocations } } = this.props;
    const { popUpOpen } = this.state;
    const view = this.state.mode === 'view';

		return (
			<>
				<Header />
				<main>
					{ popUpOpen && <NewUserModal onPopUpClose={this.handleClosePopUp}/>}
          
                <div className="flex">
                    <div className="w-2/5 items-start space-y-4" >
                      <img className="w-1/3" src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png" alt="profile picture" />
                      <div>
                        <h3>Elementos guardados</h3>
                        <div className="flex flex-col items-start space-y-2">
                          <RoutesIcon title={'Rutas: '} text={favouriteRoutes.length || 0}/>
                          <MountainPassesIcon title={'Puertos: '}text={favouritePasses.length || 0} />
                          <LocationIcon  title={'Muncipios: '} text={favouriteLocations.length || 0}/>
                        </div>
                      </div>
                    </div>
           { view ? 
                  (
                      <div className="flex flex-col w-3/5 space-y-2">
                        <div className="flex flex-col">
                          <label>Nombre</label>
                          <input 
                            type="text" 
                            name="firstName" 
                            value={firstName || 'Tu nombre'}
                            placeholder={firstName || 'Tu nombre'}
                            readOnly
                          />
                        </div>
                        <div className="flex flex-col">
                          <label>Apellidos</label>
                          <input 
                            type="text" 
                            name="lastName" 
                            value={lastName || 'Tu apellido'}
                            placeholder={lastName || 'Tu apellido'}
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
                            readOnly
                          />
                        </div>
                          <button className="button-accent" onClick={this.changeToEditMode}>Editar información</button>
                      </div>
                  )
                :
                  (< EditProfileForm cancelEditMode={this.changeToViewMode}/>) 
            }
          </div>
				</main>
			</>
		);
	}
}

export default withAuth(Profile);
