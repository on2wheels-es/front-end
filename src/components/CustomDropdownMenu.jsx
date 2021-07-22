import React, { useState } from "react";
import Select, { components } from "react-select";

const CustomDropdownMenu = ({data, handleSelectedLocation, defaultSelectedLocation}) => {
  const [selectedValue, setSelectedValue ] = useState(defaultSelectedLocation);

  const handleChange = (newSelectedValue) => {
    setSelectedValue(newSelectedValue)
    handleSelectedLocation(newSelectedValue)
  }
 
  const Option = (props) => { 
    console.log(props.value === selectedValue)
    return ( 
    <div> 
      <components.Option {...props}> 
        <input type="checkbox" checked={props.isSelected} onChange={() => null} className="bg-black"/> <label>{props.label}</label> 
      </components.Option> 
    </div> 
    ); 
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: 0,
      padding:0,
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,

    })
  };

  return (
    <div className="py-1 mb-3 border-b-2 rounded-none 761md:w-72 ">
      <Select
        value={selectedValue}
        onChange={handleChange}
        options={data}
        components={{ Option }}
        placeholder="Elige tu destino"
        styles={customStyles}
      />
    </div>
  );
};

export default CustomDropdownMenu;