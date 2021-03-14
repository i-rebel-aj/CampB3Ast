import React, { useState } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const Faculty = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate
    );

    return(
        <div>
<div className='form-inputs'>
          <label className='form-label'>Registration Number</label>
          <input
            className='form-input'
            type='text'
            name='registration'
            placeholder='Enter your Registration Number'
            value={values.registration}
            onChange={handleChange}
          />
         </div> 
        </div>

    )
}
export default Faculty;