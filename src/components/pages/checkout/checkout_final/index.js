import React, { Component } from 'react';
import './index.css'

import CheckoutUtilsHeader from '../checkout_utils/checkout_utils_header'

class CheckoutFinal extends Component {
    render() {
        return (
			<div className="checkout_final">
                <CheckoutUtilsHeader urlImage="header-check-confirm"/>
                <div className="checkout_final__container">
                    <div className="checkout_final__container__congrats">
                        <div className="checkout_final__container__congrats__image" />
                        <div className="checkout_final__container__congrats__label">
                            Tu compra fue realizada con éxito
                        </div>
                        <div className="checkout_final__container__congrats__button">
                            IR A NEW
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckoutFinal;
