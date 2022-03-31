import React from 'react'
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import './FormikControl.scss';

const Radio = (props) => {
    const {label, name, options, ...rest} = props;
    return (
        <div className='form'>
            <div className='form__content'>
            <label className='form__content--label' htmlFor={name}>{label}</label>
            <div className='anit'>
            <Field className='form__content--input' name={name} {...rest}>
                {
                    ({ field }) => {
                        return options.map(option => {
                            return (
                                <div className='form__content--input-sec' key={option.key}>
                                    <input 
                                        type='radio' 
                                        id={option.value} 
                                        {...field} 
                                        value={option.value} 
                                        checked={field.value === option.value}
                                    />
                                    <label style={{marginBottom:'0', fontSize:'1.1rem'}} htmlFor={option.value}>{option.key}</label>
                                </div>
                            )
                        })
                    }
                }
            </Field></div>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Radio
