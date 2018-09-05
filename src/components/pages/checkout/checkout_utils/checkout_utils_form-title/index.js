import React, { Component } from 'react';
import './index.css'

class CheckoutUtilsFormTitle extends Component {
    render() {
        return (
			<div className="checkout_utils_form-title" style={{ width:this.props.width }}>
                <div className="checkout_utils_form-title-icon" style={{
                    backgroundImage: "url(http://localhost:3000/Icons/"+this.props.pathIcon+".png)"
                }}/>
                <div className="checkout_utils_form-title-text">{this.props.title}</div>
            </div>
        );
    }
}

export default CheckoutUtilsFormTitle;