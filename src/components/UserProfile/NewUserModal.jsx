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
            <div className="popup">
              <div className="relative my-6 mx-auto w-11/12 md:max-w-3xl bg-white p-8 md:px-8 md:py-6 rounded-xl shadow-xl">
                <h2 className="mb-6">Completa tu perfil</h2>
                
                <form onSubmit={this.handleFormSubmit} className="flex flex-col space-y-6 mt-4">
                  <div>
                    <label>Nombre</label>
                    <input type="text" name="firstName" value={firstName} onChange={this.handleChange} className="form-input" />
                  </div>
                  <div>
                    <label>Apellidos</label>
                    <input type="text" name="lastName" value={lastName} onChange={this.handleChange} className="form-input" />
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
                          <input 
                            type="number" 
                            name="yearOfBirth" 
                            value={yearOfBirth} 
                            onChange={this.handleChange} 
                            className="form-input" 
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label>Género</label>
                      <div className="form-input pr-2">
                        <SingleSelectMenu 
                          data={genderOptions}  
                          handleSelectedValue={(selectedValue) => this.setState({gender: selectedValue.value})} 
                          placeholder={'Género'}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button className="link-as-button" onClick={this.handlePopUpClose}>Completar más tarde</button>
                      <button type="submit" className="button-accent-big ml-8">Guadar información</button>
                    </div>
                </form> 
              </div>
            </div>
        )
    }
}

export default withAuth(NewUserModal);

