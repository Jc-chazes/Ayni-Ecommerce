import React from 'react';
import {reduxForm,Field} from 'redux-form'
import './form-card.css'
import CheckoutUtilsFormFooter from '../../../checkout_utils/checkout_utils_form-footer'

const mounth=["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
const year=[2018, 2019, 2020, 2021, 2022, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029];

const  validate = (values)=>{
    const errors = {}
    if (!values.card){
        errors.card = 'Requerido'
    }else if(!/^([0-9])*$/.test(values.card)){
        errors.card='Inválido'
    }else if(values.card.length != 16){
        errors.card='Inválido'
    }

    if (!values.cvv){
        errors.cvv = 'Requerido'
    }else if(!/^([0-9])*$/.test(values.cvv)){
        errors.cvv='Inválido'
    }else if(values.cvv.length != 3){
        errors.cvv='Inválido'
    }
    return (errors)
}
const renderCard=({input,meta,label})=>{
    return(
        <div className='renderCard'>
            <div style={{display:'flex'}}> 
                <label className='renderCard__label'>{label}</label>
                {meta.error && meta.touched &&  <span className='error'>{meta.error}</span>}
            </div>       
            <input {... input} maxlength="20" className='card'/> 
        </div>
    ); 
}  
const renderCvv=({input,meta,label})=>{
    return(
        <div className='renderCvv'>
            <div style={{display:'flex',width:230}}>
                <label className='renderCvv__label'>{label}</label>
                {meta.error && meta.touched &&  <span className='error'>{meta.error}</span>}
            </div>              
            <input {... input} maxlength="3" className='cvv'/>       
        </div>
    ); 
} 
const renderSelect=({select,meta,label,input,children})=>{
    return(
        <div className='renderSelect'>     
            <label className='renderSelect__label'>{label}</label>
            <select {... input} className='select'>{children}
            </select> 
            {meta.error && meta.touched &&  <span className='error'>{meta.error}</span>}
        </div>
    ); 
}       
let FormCard =({invalid})=>{
    return(
        <form>
        <div className='form-card' >
                <div className='form__row1'>
                    <Field name="card"  label="Tarjeta de Crédito o Débito" component={renderCard}/>
                    <Field name="cvv"  label="Código de Seguridad" component={renderCvv}/>
                </div>

                 <div className='form__row2'>
                    <Field name="mounth"  label="Mes" component={renderSelect}>
                        {mounth.map((val,key)=>{
                            return(<option key={key} value={val}>{val}</option>);
                        })}
                    </Field>
                    <Field name="year"   label="Año"  component={renderSelect}>
                        {year.map((val,key)=>{
                                return(<option key={key} value={val}>{val}</option>);
                        })} 
                    </Field>
                </div>
               
                <CheckoutUtilsFormFooter NextLabel='Siguiente' disabled={invalid} page='checkout-confirm'/>
        </div>
       
    </form>

    );
}
FormCard =  reduxForm({
    form : 'demo',
    validate,
    destroyOnUnmount:false

})(FormCard)
export default FormCard;