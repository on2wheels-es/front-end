import React, { Component } from "react";
import { withAuth } from "../providers/AuthProvider";
import { genderOptions } from "../data"

import CustomDropdownMenu from "./CustomDropdownMenu";

class UserDetailsPopUp extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            birthday: '',
            gender: ''
        }
    }

    handleChange = (e) =>{
      this.setState({
        [e.target.name]: e.target.value,
      })
    }

    render() {
        const { name, surname, birthday, gender } = this.state;
        console.log('profile details', this.state)
        return (
            <div>
                <form className="form" onSubmit={this.handleFormSubmit}>
                    <label className="block text-lg font-medium text-gray-700">Nombre</label>
                    <input type="text" name="name" value={name} onChange={this.handleChange} className="form-input" />

                    <label className="block text-lg font-medium text-gray-700">Apellidos</label>
                    <input type="text" name="surname" value={surname} onChange={this.handleChange} className="form-input" />

                    <label className="block text-lg font-medium text-gray-700">Fecha de nacimiento</label>
                    <input type="date" name="birthday" value={birthday} onChange={this.handleChange} className="form-input" />

                    <CustomDropdownMenu 
                      data={genderOptions}  
                      handleSelectedValue={(selectedValue) => this.setState({gender: selectedValue.value})} 
                      placeholder={''}
                    />
                </form> 
            </div>
        )
    }
}

export default withAuth(UserDetailsPopUp);

