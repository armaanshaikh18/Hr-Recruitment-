import React from 'react'
import {Field, ErrorMessage} from 'formik'
import './FormikControl.scss';


// error component
import TextError from './TextError'

const Input = (props) => {
    const {label, name, ...rest} = props
    return (
        <div className='form'>
            <div className='form__content'>
                <label className='form__content--label' htmlFor={name}>{label}</label>
                <Field className='form__content--input' id={name} name={name} {...rest} />
            </div>
            <ErrorMessage style={{color:'oragered'}} className='form__content--error' name={name} component={TextError} />
        </div>
    )
}

export default Input
