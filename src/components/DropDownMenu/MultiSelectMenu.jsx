import React, { useState } from "react";
import Select, { components } from "react-select";

const MultiSelectMenu = ({data, handleSelectedValue, defaultSelectedValue, placeholder}) => {
  const [selectedValue, setSelectedValue ] = useState(defaultSelectedValue || null);

  const handleChange = (newSelectedValue) => {
    setSelectedValue(newSelectedValue)
    handleSelectedValue(newSelectedValue)
  }
 
  const Option  = ({ children, ...props }) => { 
    return ( 
    <div> 
      <components.Option {...props}> 
        <input type="checkbox" checked={props.isSelected} onChange={() => null} /> <label className="mx-1">{props.label}</label> 
      </components.Option> 
    </div> 
    ); 
  };

   const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: '#313030', border: 0, fontSize: '18px', marginBottom: '10px' }),
    option: (base) => ({ 
      ...base, 
      padding: 5, 
      borderRadius: 5, 
      color: '#313030', 
      display: 'flex' ,
      alignItems: 'center',
      fontFamily: 'Open sans',
      fontSize: '18px',
   }) 
   }
  
  return (
      <Select
        value={selectedValue}
        onChange={handleChange}
        options={data}
        components={{ Option }}
        placeholder={placeholder}
        styles={colourStyles}
        isMulti
      />
  );
};

export default MultiSelectMenu;