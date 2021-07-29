import React, { useState } from "react";
import Select, { components } from "react-select";

const SingleSelectMenu = ({data, handleSelectedValue, defaultSelectedValue, placeholder}) => {
  const [selectedValue, setSelectedValue ] = useState(defaultSelectedValue || null);

  const handleChange = (newSelectedValue) => {
    setSelectedValue(newSelectedValue)
    handleSelectedValue(newSelectedValue)
  }
 
  const Option = ({ children, ...props }) => { 
    return ( 
    <div className="mx-2"> 
      <components.Option {...props}> 
        <input type="checkbox" checked={props.isSelected} onChange={() => null} /> <label>{props.label}</label> 
      </components.Option> 
    </div> 
    ); 
  };

  const colourStyles = {
    control: styles => ({ ...styles, border: 0 }),
   }
  
  return (
      <Select
        value={selectedValue}
        onChange={handleChange}
        options={data}
        components={{ Option }}
        placeholder={''}
        styles={colourStyles}
      />
  );
};

export default SingleSelectMenu;