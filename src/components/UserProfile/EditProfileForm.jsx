import React, { Component } from 'react'
import SingleSelectMenu from "../DropDownMenu/SingleSelectMenu";
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';
import { withAuth } from "../../providers/AuthProvider";
import { genderOptions } from "../../data/data";
import { giveFormatToBirthday } from "../../helpers";
import { withRouter } from 'react-router'

export class EditProfileForm extends Component {
    constructor(props) {
        super(props);
        const { user: { firstName, lastName, gender, dayOfBirth, monthOfBirth, yearOfBirth } } = this.props;
        this.state = {
          firstName,
          lastName,
          gender,
          dayOfBirth,
          monthOfBirth,
          yearOfBirth
        }
    }

    handleChange = (e) =>{
        this.setState({
          [e.target.name]: e.target.value,
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        const { dayOfBirth, monthOfBirth, yearOfBirth, firstName, lastName, gender } = this.state;
        if( !dayOfBirth || !monthOfBirth || !yearOfBirth || !firstName || !lastName || !gender ) {
          return NotificationManager.error('Rellena todos los campos', '', 800)
        }
        const birthday = giveFormatToBirthday(dayOfBirth, monthOfBirth, yearOfBirth);
        const valuesToUpdate = {...this.state, birthday };
  
        this.props.updateUserProfile(valuesToUpdate);
        NotificationManager.success('Los cambios han sido guardados correctamente', '', 800)
        return this.props.history.push('/profile')
    }

    render() {
        const { firstName, lastName, gender, dayOfBirth, monthOfBirth, yearOfBirth } = this.state;

        return (
            <form onSubmit={this.handleFormSubmit} className="flex flex-col w-3/5 space-y-2">
                <div>
                  <label>Nombre</label>
                  <input 
                    type="text" 
                    name="firstName" 
                    value={firstName} 
                    placeholder={firstName}
                    onChange={this.handleChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <label>Apellidos</label>
                  <input 
                    type="text" 
                    name="lastName" 
                    value={lastName} 
                    placeholder={lastName}
                    onChange={this.handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <p className="body_primary_semibold mb-2 font-base">Fecha de nacimiento</p>
                    <div className="flex space-x-8">
                      <div>
                        <label>Día</label>
                        <input type="number" maxLength="2" name="dayOfBirth" value={dayOfBirth} onChange={this.handleChange} className="form-input" />
                      </div>
                      <div>
                        <label>Mes</label>
                          <input type="number" maxLength="2" name="monthOfBirth" value={monthOfBirth} onChange={this.handleChange} className="form-input" />
                      </div>
                      <div>
                        <label>Año</label>
                        <input type="number" maxLength="4" name="yearOfBirth" value={yearOfBirth} onChange={this.handleChange} className="form-input" />
                      </div>
                    </div>
                </div>

                <div>
                  <label>Género</label>
                  <div className="form-input pr-2">
                    <SingleSelectMenu 
                      data={genderOptions}  
                      handleSelectedValue={(selectedValue) => this.setState({gender: selectedValue.value})} 
                      placeholder={gender}
                      value={gender}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="link-as-button text-primary-medium">Cancelar</button>
                  <button className="button-accent ml-8" onClick={this.handleFormSubmit}>Guardar cambios</button>
                </div>
            </form> 
        )
    }
}

export default withRouter(withAuth(EditProfileForm));
