import React, { Component } from "react";
import CustomDropdownMenu from "./CustomDropdownMenu";
import { withAuth } from "../providers/AuthProvider";
import { genderOptions } from "../data/data"
import { giveFormatToBirthday } from "../helpers"

class UserDetailsPopUp extends Component  {
    constructor(props) {
        super(props);
        this.state = {
          firstName: '',
          lastName: '',
          dayOfBirthday: '',
          monthOfBirthday: '',
          yearOfBirthday:'',
          gender: '',
        }
    }

    handleChange = (e) =>{
      this.setState({
        [e.target.name]: e.target.value,
      })
    }

    handleFormSubmit = (e) => {
      e.preventDefault()
      const { dayOfBirthday, monthOfBirthday, yearOfBirthday, firstName, lastName, gender } = this.state;
      const birthday = giveFormatToBirthday(dayOfBirthday, monthOfBirthday, yearOfBirthday);
      this.props.createUserProfile({ firstName, lastName, gender, birthday });
    }

    render() {
        const { firstName, lastName, dayOfBirthday, monthOfBirthday, yearOfBirthday } = this.state;
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label className="block text-lg font-medium text-gray-700">Nombre</label>
                    <input type="text" name="firstName" value={firstName} onChange={this.handleChange} className="form-input" />

                    <label className="block text-lg font-medium text-gray-700">Apellidos</label>
                    <input type="text" name="lastName" value={lastName} onChange={this.handleChange} className="form-input" />

                    <div>
                      <p>Fecha de nacimiento</p>
                      <div>
                        <label className="block text-lg font-medium text-gray-700">Día</label>
                        <input type="number" maxLength="2" name="dayOfBirthday" value={dayOfBirthday} onChange={this.handleChange} className="form-input" />
                      </div>
                      <div>
                        <label className="block text-lg font-medium text-gray-700">Mes</label>
                        <input type="number" maxLength="2" name="monthOfBirthday" value={monthOfBirthday} onChange={this.handleChange} className="form-input" />
                      </div>
                      <div>
                        <label className="block text-lg font-medium text-gray-700">Año</label>
                        <input type="number" maxLength="4" name="yearOfBirthday" value={yearOfBirthday} onChange={this.handleChange} className="form-input" />
                      </div>
                    </div>

                    <CustomDropdownMenu 
                      data={genderOptions}  
                      handleSelectedValue={(selectedValue) => this.setState({gender: selectedValue.value})} 
                      placeholder={''}
                    />

                    <div>
                      <a href="#">Completar más tarde</a>
                      <button type="submit">Guadar información</button>
                    </div>

                </form> 
            </div>
        )
    }
}

export default withAuth(UserDetailsPopUp);

