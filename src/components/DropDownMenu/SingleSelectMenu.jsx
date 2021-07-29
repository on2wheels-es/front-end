import React, { useState } from "react";
import Select, { components } from "react-select";

const SingleSelectMenu = ({data, handleSelectedValue, defaultSelectedValue, placeholder}) => {
  const [selectedValue, setSelectedValue ] = useState(defaultSelectedValue || null);

  const handleChange = (newSelectedValue) => {
    setSelectedValue(newSelectedValue)
    handleSelectedValue(newSelectedValue)
  }
 
  const Option  = ({ children, ...props }) => { 
    return ( 
    <div> 
      <components.Option {...props}> 
        <input onChange={() => null} /> <label className="mx-1">{props.label}</label> 
      </components.Option> 
    </div> 
    ); 
  };
  
  return (
      <Select
        value={selectedValue}
        onChange={handleChange}
        options={data}
        components={{ Option }}
        placeholder={placeholder}
      />
  );
};

export default SingleSelectMenu;