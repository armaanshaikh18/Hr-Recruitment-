import React from 'react'
import {ErrorMessage, Field} from 'formik'
import './FormikControl.scss';
import TextError from './TextError'

const Upload = (props) => {
const{label, name,onChange, newLabel, ...rest}=props;
    return (
        <div className='form'>
            <div className='form__content'>
                <label className='form__content--label' htmlFor={name}>{label}</label>
            <div className='form__content--input' name={name} {...rest}>
                <label>{newLabel}</label>
                <label htmlFor='img' className='form__content--input-label' >Attach</label>
                <Field className='form__content--input-file' onChange={onChange} type="file" id='img'  name='img' accept="image/*" />
            </div>
            </div>
            <ErrorMessage style={{color:'oragered'}} className='form__content--error' name={name} component={TextError} />

        </div>
    )
}

export default Upload
