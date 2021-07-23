import React, { Component } from "react";
import { withAuth } from "../providers/AuthProvider";
import { genderOptions } from "../data/data"

import CustomDropdownMenu from "./CustomDropdownMenu";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import '../react_dates_overrides.css'
import moment from 'moment'

class UserDetailsPopUp extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            dayOfBirthday: '',
            monthOfBirthday: '',
            yearOfBirthday:'',
            gender: ''
        }
    }

    handleChange = (e) =>{
      this.setState({
        [e.target.name]: e.target.value,
      })
    }

    handleFormSubmit = (e) => {
      e.preventDefault()
      const { dayOfBirthday, monthOfBirthday, yearOfBirthday } = this.state;
      const birthdayDate = `${dayOfBirthday}-${monthOfBirthday}-${yearOfBirthday}`;  
      console.log('user details', this.state)
      console.log('birthday date', birthdayDate)
    }

    render() {
        const { name, surname, dayOfBirthday, monthOfBirthday, yearOfBirthday } = this.state;
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label className="block text-lg font-medium text-gray-700">Nombre</label>
                    <input type="text" name="name" value={name} onChange={this.handleChange} className="form-input" />

                    <label className="block text-lg font-medium text-gray-700">Apellidos</label>
                    <input type="text" name="surname" value={surname} onChange={this.handleChange} className="form-input" />

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

