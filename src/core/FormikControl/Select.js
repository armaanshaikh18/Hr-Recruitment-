import React from 'react'
import { ErrorMessage, useField } from 'formik';
import ReactSelect from 'react-select'
import TextError from './TextError';
import './FormikControl.scss';

const Select = (props) => {
    const {label, name, options,value, form, isMulti=false} = props;
    const field = useField(props)[0];
    const onChange = (option) => {
        form.setFieldValue(
            field.name,
            isMulti?
                option.map(item => item.value):
                option.value
        )
    }
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
        // console.log("O ", name,options)
        if(options){
            // console.log("F ", name,field.value)
            const data  = isMulti?
                options.filter(option => field.value.indexOf(option.value) >= 0):
                options.find(option => option.value === field.value)
            return data
        }else{
            return isMulti? [] : ""
        }
    } 

    return (
        <div className='form'>
            <div className='form__content'>
            <label className='form__content--label' htmlFor={name}>{label}</label>
            <ReactSelect
                name={field.name} 
                onChange={onChange}
                isMulti={isMulti}
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

export default Select

