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

  return (
    <div className="py-1 rounded-xl mb-3 761md:border-b-2 761md:rounded-none 761md:w-72">
      <Select
        value={selectedValue}
        onChange={handleChange}
        options={data}
        components={{ Option }}
        placeholder="Elige tu destino"
        theme={theme => ({
          ...theme,
          border: 0,
        })}
      />
    </div>
  );
};

export default CustomDropdownMenu;