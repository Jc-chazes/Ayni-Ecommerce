import React from 'react';
import {reduxForm,Field} from 'redux-form'
import validarEmail from './validEmail'
import './form.css'
import CheckoutUtilsFormFooter from '../../../checkout_utils/checkout_utils_form-footer'


const  validate = (values)=>{
    const errors = {}
    if (!values.name){
        errors.name = 'Requerido'
    }
    if (!values.mail){
        errors.mail = 'Requerido'
    }else if(!validarEmail(values.mail)){
        errors.mail = 'Email inválido'

    }  
    return (errors)
}
const renderInput=({input,meta,label})=>{
    return(
        <div className='input-container'>    
            
            <div className='input-container__values'>
                <label className='label'>{label}</label>
                {meta.error && meta.touched &&  <span className='error'>{meta.error}</span>}
            </div>  
            <input {... input} className='input'/> 
        </div>
    ); 
}   
let Form =({invalid})=>{
    return(
        <form>
        <div className='form' >
            <div className='form-column'>
                <Field name="name" label="Tus Nombres*" component={renderInput}/>
                <Field name="direction" label="Dirección" component={renderInput}/>
                <Field name="instruction" label="Instrucciones*" component={renderInput}/>
            </div>

            <div className='form-column'>
                <Field name="phone" label="Numero de celular*" component={renderInput}/>
                <Field name="interior" label="interiores" component={renderInput}/>
                <Field name="mail" label="correo" component={renderInput}/> 
            </div>
                     
           
        </div>
        
        <CheckoutUtilsFormFooter NextLabel='Siguiente' disabled={invalid} page='checkout-pago'/>
    </form>

    );
}
Form =  reduxForm({
    form : 'demo',
    validate,
    destroyOnUnmount:false

})(Form)
export default Form;