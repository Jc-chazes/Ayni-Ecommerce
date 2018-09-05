import React, { Component } from 'react';
import './index.css'

import CheckoutUtilsHeader from '../checkout_utils/checkout_utils_header'
import CheckoutUtilsFormTitle from '../checkout_utils/checkout_utils_form-title'
import CheckoutUtilsFormFooter from '../checkout_utils/checkout_utils_form-footer'
import CheckoutUtilsMap from '../checkout_utils/checkout_utils_map'
import List from './list_checkout/index'
class CheckoutConfirmPage extends Component {
    constructor(props){
        super(props)

    }
    render() {
        console.log('data',this.props.state.form.demo.values)
        console.log('data2',this.props.state.add_product.data_car)
        var n = this.props.state.user_info.tarjeta.card
        const strContent = (this.props.isLogged?"with-account-billing":"non-account-billing")
        const panel_map = ()=>{
            if (!/Mobi/.test(navigator.userAgent)) 
                return(
                    <CheckoutUtilsMap widthContainer={45} google={ this.props.google } address="Lima"/>
                );
        }

        return (
			<div className="checkout__confirm-page">
                <CheckoutUtilsHeader urlImage="header-check-confirm"/>
                <div className="checkout__confirm-page__container">
                    <div className="checkout__confirm-page__container__box-content">
                        <CheckoutUtilsFormTitle pathIcon="checkout-confirm-icon" title="3. CONFIRMAR COMPRA" width="210px"/>
                        <div className="checkout__confirm-page__container__box-content__info">
                            <div className="checkout__confirm-page__container__box-content__info__column-left">
                                <div className="checkout__confirm-page__container__box-content__info__column-left__info">
                                    <div className="checkout__confirm-page__container__box-content__info__column-left__info__delivery">
                                        <div className="checkout__confirm-page__container__box-content__info__column-left__info__delivery__title">
                                            ENTREGA
                                        </div>
                                        <div style={{display: "flex"}}>
                                            <div className="checkout__confirm-page__container__box-content__info__column-left__info__delivery__column-left">
                                                <div className="checkout__confirm-page__container__box-content__info__column-left__info__delivery__column-left__name-icon" />
                                                <div  className="checkout__confirm-page__container__box-content__info__column-left__info__delivery__column-left__address-icon"/>
                                            </div>
                                            <div className="checkout__confirm-page__container__box-content__info__column-left__info__delivery__column-right">
                                                <div className="checkout__confirm-page__container__box-content__info__column-left__info__delivery__column-right__user">
                                                   {this.props.state.form.demo.values && this.props.state.form.demo.values.name}
                                                </div>
                                                <div>
                                                    <div className="checkout__confirm-page__container__box-content__info__column-left__info__delivery__column-right__district">
                                                    
                                                    </div>
                                                    <div className="checkout__confirm-page__container__box-content__info__column-left__info__delivery__column-right__address">
                                                    {this.props.state.form.demo.values && this.props.state.form.demo.values.direction}
                                                    </div>
                                                    <div className="checkout__confirm-page__container__box-content__info__column-left__info__delivery__column-right__int">
                                                       
                                                    </div>  
                                                </div>
                                                <div className="checkout__confirm-page__container__box-content__info__column-left__info__delivery__column-right__phone">
                                                    {this.props.state.form.demo.values && this.props.state.form.demo.values.phone}
                                                </div>
                                                <div className="checkout__confirm-page__container__box-content__info__column-left__info__delivery__column-right__email">
                                                {this.props.state.form.demo.values && this.props.state.form.demo.values.mail}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__confirm-page__container__box-content__info__column-left__info__payment">
                                        <div className="checkout__confirm-page__container__box-content__info__column-left__info__payment__title">
                                            MÉTODO DE PAGO
                                        </div>
                                        <div style={{display: "flex"}}>
                                            <div className="checkout__confirm-page__container__box-content__info__column-left__info__payment__column-left">
                                                <div className="checkout__confirm-page__container__box-content__info__column-left__info__payment__column-left__card-icon" />
                                            </div>
                                            <div className="checkout__confirm-page__container__box-content__info__column-left__info__payment__column-right">
                                                <div className="checkout__confirm-page__container__box-content__info__column-left__info__payment__column-right__nro-card">
                                                   xxxx xxxx xxxx 
                                                </div>
                                                <div className="checkout__confirm-page__container__box-content__info__column-left__info__payment__column-right__date">
                                                    Vencimiento:{this.props.state.form.demo.values && this.props.state.form.demo.values.mounth}/{this.props.state.form.demo.values && this.props.state.form.demo.values.year}


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                { panel_map() }
                            </div>
                            <div className="checkout__confirm-page__container__box-content__info__column-right">
                                <div style={{display:'flex',flexDirection:"column",justifyContent:"space-between" }}>
                                    <div className="checkout__confirm-page__container__box-content__info__column-right__title">MIS COMPRAS Nxxxx
                                    { this.props.state.add_product.data_car.map((val,key)=>{
                                                    
                                                            return(List(val));
                                                       })}  
                                    </div>      
                                </div>
                                <div className="checkout__confirm-page__container__box-content__info__column-right__container-sub-total">
                                    <div className="checkout__confirm-page__container__box-content__info__column-right__container-sub-total__column-left">
                                        <div className="checkout__confirm-page__container__box-content__info__column-right__container-sub-total__column-left__content">
                                            <div className="checkout__confirm-page__container__box-content__info__column-right__container-sub-total__column-left__label">Subtotal 120:
                                            </div>
                                            <div className="checkout__confirm-page__container__box-content__info__column-right__container-sub-total__column-left__label">Envío: 10
                                            </div>
                                        </div>
                                        <div className="checkout__confirm-page__container__box-content__info__column-right__container-sub-total__column-left__label">Total:120
                                        </div>
                                    </div>
                                    <div className="checkout__confirm-page__container__box-content__info__column-right__container-sub-total__column-right">
                                        <div className="checkout__confirm-page__container__box-content__info__column-right__container-sub-total__column-right__content">
                                            <div className="checkout__confirm-page__container__box-content__info__column-right__container-sub-total__column-right__value">S/ xxx
                                            </div>
                                            <div className="checkout__confirm-page__container__box-content__info__column-right__container-sub-total__column-right__value">S/ xxx
                                            </div>
                                        </div>
                                        <div className="checkout__confirm-page__container__box-content__info__column-right__container-sub-total__column-right__total-value">S/ xx
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                        <CheckoutUtilsFormFooter NextLabel="CONFIRMAR COMPRA" page="checkout-finish" />
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default CheckoutConfirmPage;