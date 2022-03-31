import React from 'react'
import { ErrorMessage, Field } from 'formik';

// error
import TextError from './TextError';

const TextArea = (props) => {
    const {label, name, ...rest} = props;
    return (
        <div className='form'>
            <div className='form__content'>
            <label className='form__content--label' htmlFor={name}>{label}</label>
            <Field className='form__content--input' as='textarea' id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
            </div>
        </div>
    )
}

export default TextArea
