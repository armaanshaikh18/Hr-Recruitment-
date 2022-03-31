import React from 'react'
import { ErrorMessage, useField } from 'formik';
import ReactSelect from 'react-select'
import TextError from './TextError';
import './FormikControl.scss';

const SelectWithApi = (props) => {
    const {label, name, options, form, onChange} = props;
    const field = useField(props)[0];
    
    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px dotted pink',
          color: state.isSelected ? 'white' : 'black',
          backgroundColor: state.isSelected ? 'black' : 'white'
        }),
        menu: (provided, state) => ({
          ...provided,
          
          borderBottom: '1px dotted pink',
          maxHeight: 300,
          width:300,
          marginLeft:-1,
        }),
      control: () => ({
        // none of react-select's styles are passed to <Control />
        display:'grid',
        gridAutoFlow:'column',
        gridTemplateColumns:'1fr 45px',
        width: 300,
        height:40
      }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }

    const getValue = () => {
        if(options){
            const data  = options.find(option => option.value === field.value)
            return data
        }
    } 

    return (
        <div className='form'>
            <div className='form__content'>
            <label className='form__content--label' htmlFor={name}>{label}</label>
            <ReactSelect
                name={field.name} 
                onChange={(option) => onChange(form, field, option)}
                options={options}
                placeholder='Select'
                styles={customStyles}
                value={getValue()} 
                className='form__content--input'
            />
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default SelectWithApi

