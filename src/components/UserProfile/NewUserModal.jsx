import React, { Component } from "react";
import SingleSelectMenu from "../DropDownMenu/SingleSelectMenu";
import { withAuth } from "../../providers/AuthProvider";
import { genderOptions } from "../../data/data"
import { giveFormatToBirthday } from "../../helpers"

class NewUserModal extends Component  {
    constructor(props) {
        super(props);
        this.state = {
          firstName: '',
          lastName: '',
          dayOfBirth: '',
          monthOfBirth: '',
          yearOfBirth:'',
          gender: '',
        }
    }

    handleChange = (e) =>{
      this.setState({
        [e.target.name]: e.target.value,
      })
    }

    handleFormSubmit =(e) => {
      e.preventDefault()
      const { dayOfBirth, monthOfBirth, yearOfBirth, firstName, lastName, gender } = this.state;
      const birthday = giveFormatToBirthday(dayOfBirth, monthOfBirth, yearOfBirth);
      this.props.updateUserProfile({ firstName, lastName, gender, birthday, dayOfBirth, monthOfBirth, yearOfBirth, isNewUser: false });
    }

    handlePopUpClose = async (e) => {
      e.preventDefault()
      await this.props.updateUserProfile({ isNewUser: false });
      this.props.onPopUpClose()
    }

    render() {
        const { firstName, lastName, dayOfBirth, monthOfBirth, yearOfBirth } = this.state;
        return (
            <div className=" bg-red-400 w-full h-full">
              <div className="modal-content">
                <form onSubmit={this.handleFormSubmit}>
                    <label className="block text-lg font-medium text-gray-700">Nombre</label>
                    <input type="text" name="firstName" value={firstName} onChange={this.handleChange} className="form-input" />

                    <label className="block text-lg font-medium text-gray-700">Apellidos</label>
                    <input type="text" name="lastName" value={lastName} onChange={this.handleChange} className="form-input" />

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
                      placeholder={'Género'}
                    />

                    <div>
                      <a href="#">Completar más tarde</a>
                      <button type="submit">Guadar información</button>
                    </div>

                </form> 
                <button className="close" onClick={this.handlePopUpClose}>Close</button>
              </div>
            </div>
        )
    }
}

export default withAuth(NewUserModal);

