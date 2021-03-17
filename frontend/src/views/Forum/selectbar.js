import React, { useState } from 'react';
import Select from 'react-select';


function Selectbar() {
  const data = [
    {
      value: 0,
      label: "Public"
    },
    {
      value: 1,
      label: "Private"
    }   
  ];
 
  const [selectedOption, setSelectedOption] = useState('');
 
  // handle onChange event of the dropdown
  const handleChange1 = e => {
    setSelectedOption(e);
  }
 
  return (
    <div>
      <Select
        placeholder="Form Type"
        value={selectedOption} // set selected value
        options={data} // set list of the data
        onChange={handleChange1} // assign onChange function
      />
{/*selectedOption.value === 1 && <Faculty />*/}

{/*can render the form according to the type*/}
{/*selectedOption.value === 0 && <Student />*/}
      
    </div>
  );
}
 
export default Selectbar;