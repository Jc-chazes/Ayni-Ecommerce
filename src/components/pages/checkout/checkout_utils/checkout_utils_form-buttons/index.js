import React, { Component } from 'react';
import './index.css'

class CheckoutUtilsFormButtons extends Component {
    render() {
        return (
			<div className="checkout_utils_form-buttons">
                <div className="checkout_utils_form-buttons-button1">{this.props.label1}</div>
                <div className="checkout_utils_form-buttons-button2">{this.props.label2}</div>
            </div>
        );
    }
}

export default CheckoutUtilsFormButtons;