/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import SingleSelectMenu from "../DropDownMenu/SingleSelectMenu";
import { withAuth } from "../../providers/AuthProvider";
import { genderOptions } from "../../data/data";
import { giveFormatToBirthday } from "../../helpers";

export class EditProfileForm extends Component {
    constructor(props) {
        super(props);
        const { user: { firstName, lastName , email, municipality, gender, dayOfBirth, monthOfBirth, yearOfBirth } } = this.props;
        this.state = {
          firstName,
          lastName,
          email,
          municipality,
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

    checkValuesToUpdate = (obj) => {
        let valuesToUpdate;
        // make a for loop
        for (const key in obj) {
            console.log('obj[key', obj[key])
            if (obj[key] === null || obj[key] === "") {
                console.log('empty')
             return alert(`${[key]} is empty`) 
            } 
            valuesToUpdate = { [key]: obj[key] };  
        }
        return valuesToUpdate;
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('state is', this.state)
        const valuesToUpdate = this.checkValuesToUpdate(this.state);
        console.log('values to update', valuesToUpdate)
    
        /*

        const { dayOfBirth, monthOfBirth, yearOfBirth, firstName, lastName, gender } = this.state;
        const birthday = giveFormatToBirthday(dayOfBirth, monthOfBirth, yearOfBirth);
        this.props.updateUserProfile({ dayOfBirth, monthOfBirth, yearOfBirth, firstName, lastName, gender, email, birthday });
        */
    }

    render() {
        console.log('edit profile',this.props.user)
        const { firstName, lastName , email, municipality, gender, dayOfBirth, monthOfBirth, yearOfBirth } = this.state;

        return (
        <form onSubmit={this.handleFormSubmit}>
            <label className="block text-lg font-medium text-gray-700">Nombre</label>
            <input 
              type="text" 
              name="firstName" 
              value={firstName} 
              placeholder={firstName}
              onChange={this.handleChange}
            />

            <label className="block text-lg font-medium text-gray-700">Apellidos</label>
            <input 
              type="text" 
              name="lastName" 
              value={lastName} 
              placeholder={lastName}
              onChange={this.handleChange}
            />

            <label className="block text-lg font-medium text-gray-700">Email</label>
            <input 
              type="text" 
              name="lastName" 
              value={email} 
              onChange={this.handleChange} 
            />

            <label className="block text-lg font-medium text-gray-700">Provincia</label>
            <input 
              type="text" 
              name="municipality" 
              value={municipality} 
              onChange={this.handleChange}
            />

            <div>
              <p>Fecha de nacimiento</p>
              <div>
                  <label className="block text-lg font-medium text-gray-700">Día</label>
                  <input type="number" maxLength="2" name="dayOfBirth" value={dayOfBirth} onChange={this.handleChange} className="form-input" />
              </div>
              <div>
                  <label className="block text-lg font-medium text-gray-700">Mes</label>
                  <input type="number" maxLength="2" name="monthOfBirth" value={monthOfBirth} onChange={this.handleChange} className="form-input" />
              </div>
              <div>
                  <label className="block text-lg font-medium text-gray-700">Año</label>
                  <input type="number" maxLength="4" name="yearOfBirth" value={yearOfBirth} onChange={this.handleChange} className="form-input" />
              </div>
            </div>

            <SingleSelectMenu 
               data={genderOptions}  
               handleSelectedValue={(selectedValue) => this.setState({gender: selectedValue.value})} 
               placeholder={gender}
               value={gender}
               
            />
            <button onClick={this.handleFormSubmit}>Guardar cambios</button>
            <button>Cancelar</button>
        </form> 
        )
    }
}

export default withAuth(EditProfileForm)
