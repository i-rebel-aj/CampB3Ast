import React, { useState } from 'react';
import Select from 'react-select';
import Faculty from './faculty';
import Student from './student';


function Selectbar() {
  const data = [
    {
      value: 0,
      label: "Student"
    },
    {
      value: 1,
      label: "Faculty"
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
        placeholder="Select Option"
        value={selectedOption} // set selected value
        options={data} // set list of the data
        onChange={handleChange1} // assign onChange function
      />
{selectedOption.value === 1 && <Faculty />}
{selectedOption.value === 0 && <Student />}
    
      
    </div>
  );
}
 
export default Selectbar;