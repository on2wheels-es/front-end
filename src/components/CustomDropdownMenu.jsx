import React, { useState } from "react";
import Select, { components } from "react-select";

const CustomDropdownMenu = ({data, handleSelectedValue, defaultSelectedValue, placeholder}) => {
  const [selectedValue, setSelectedValue ] = useState(defaultSelectedValue || '');

  const handleChange = (newSelectedValue) => {
    setSelectedValue(newSelectedValue)
    handleSelectedValue(newSelectedValue)
  }
 
  const Option = (props) => { 
    console.log(props.value === selectedValue)
    return ( 
    <div> 
      <components.Option {...props}> 
        <input type="checkbox" checked={props.isSelected} onChange={() => null}/> <label>{props.label}</label> 
      </components.Option> 
    </div> 
    ); 
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: 0,
      padding:0,
      backgroundColor: '#313030',
      fontFamily: 'Open sans',
      fontSize: '16px',
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,

    })
  };

  return (
    <div className="761md:w-72">
      <Select
        value={selectedValue}
        onChange={handleChange}
        options={data}
        components={{ Option }}
        placeholder={placeholder}
        styles={customStyles}
      />
    </div>
  );
};

export default CustomDropdownMenu;