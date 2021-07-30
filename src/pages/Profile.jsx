import React, { Component } from 'react';
import Header from '../components/Header/Header';
import NewUserModal from '../components/UserProfile/NewUserModal';
import EditProfileForm from '../components/UserProfile/EditProfileForm';
import { withAuth } from '../providers/AuthProvider';

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

	handleChange = (e) => {
		this.setState({
		  [e.target.name]: e.target.value,
		})
	}

	render() {
	  const { user: { firstName, lastName , email, municipality, birthday, gender, favouriteRoutes, favouritePasses, favouriteLocations } } = this.props;
    const { popUpOpen } = this.state;
    const view = this.state.mode === 'view';

		return (
			<>
				<Header />
				<main>
					{ popUpOpen && <NewUserModal onPopUpClose={this.handleClosePopUp}/>}
          { view ?
              (
                <div className="flex">
                    <div className="w-2/5" >
                      <img src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png" alt="profile picture" />
                      <div>
                        <ul>
                          <li>{favouriteRoutes.length || 0} Rutas guardadas</li>
                          <li>{favouritePasses.length || 0} Puertos de montañas guardados</li>
                          <li>{favouriteLocations.length || 0} Muncipios guardados</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col w-3/5">
                        <label>Nombre</label>
                        <input 
                          type="text" 
                          name="firstName" 
                          value={firstName || 'Tu nombre'}
                          placeholder={firstName || 'Tu nombre'}
                          readOnly
                        />

                        <label>Apellidos</label>
                        <input 
                          type="text" 
                          name="lastName" 
                          value={lastName || 'Tu apellido'}
                          placeholder={lastName || 'Tu apellido'}
                          readOnly
                        />

                        <label>Email</label>
                        <input 
                          type="text" 
                          name="email" 
                          value={email || 'Tu email'}
                          placeholder={email || 'Tu email'} 
                          readOnly
                        />

                        <label>Provincia</label>
                        <input 
                          type="text" 
                          name="municipality" 
                          value={municipality || 'Provincia donde vives'} 
                          placeholder={municipality || 'Provincia donde vives'} 
                          readOnly
                        />
                        <label>Fecha de nacimiento</label>
                        <input 
                          type="text" 
                          name="birthday" 
                          value={birthday || 'Fecha de nacimiento'} 
                          placeholder={birthday || 'Fecha de nacimiento'} 
                          readOnly
                        />

                        <label>Género</label>
                        <input 
                          type="text" 
                          name="gender" 
                          value={gender || 'Género'} 
                          placeholder={gender || 'Género'} 
                          readOnly
                        />


                        <button onClick={this.changeToEditMode}>Editar información</button>
                  </div>
                </div>
              )
              :
               (< EditProfileForm />) 
            }
				</main>
			</>
		);
	}
}

export default withAuth(Profile);
