import React, { useState } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const Student = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate
    );

    return(
        <div>
<div className='form-inputs'>
          <label className='form-label'>RollNumber</label>
          <input
            className='form-input'
            type='text'
            name='rollnumber'
            placeholder='Enter your Roll No.'
          /> 
          </div>

          <div className='form-inputs'>
          <label className='form-label'>Course</label>
          <input
            className='form-input'
            type='text'
            name='course'
            placeholder='Enter your Course'
          /> 
          </div>

          <div className='form-inputs'>
          <label className='form-label'>Batch</label>
          <input
            className='form-input'
            type='text'
            name='batch'
            placeholder='Enter your Batch'
          
          /> 
          </div>

          <div className='form-inputs'>
          <label className='form-label'>Course Duration</label>
          <input
            className='form-input'
            type='text'
            name='duration'
            placeholder='Course Duration'
         
          /> 
          </div>
        </div>

    )
}
export default Student;