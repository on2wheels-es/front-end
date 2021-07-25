import React, { useState } from "react";
import Select, { components } from "react-select";

const CustomDropdownMenu = ({data, handleSelectedValue, defaultSelectedValue, placeholder}) => {
  const [selectedValue, setSelectedValue ] = useState(defaultSelectedValue || null);
  console.log(selectedValue)

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
    control: styles => ({ ...styles, backgroundColor: '#313030', border: 0 }),
    option: (base) => ({ 
      ...base, 
      padding: 5, 
      borderRadius: 5, 
      color: '#313030', 
      display: 'flex' ,
      alignItems: 'center',
      fontFamily: 'Open sans',
      fontSize: '16px',
   }) 
   }
  

  return (
    <div className="761md:w-72">
      <Select
        value={selectedValue}
        onChange={handleChange}
        options={data}
        components={{ Option }}
        placeholder={placeholder}
        styles={colourStyles}
        isMulti
      />
    </div>
  );
};

export default CustomDropdownMenu;