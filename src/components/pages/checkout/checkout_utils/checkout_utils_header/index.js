import React, { Component } from 'react';
import './index.css'

import CheckoutUtilsMenuOptions from '../checkout_utils_menu-options'

class CheckoutUtilsHeader extends Component {
    render() {
        return (
			<div className="checkout_utils_header">
                <div className="checkout_utils_header__image-container">
                    <div className="checkout_utils_header__image-container__image" 
                    style={{
                        backgroundImage: "url(http://localhost:3000/Icons/"+this.props.urlImage+".png)"
                    }}/>
                </div>
            </div>
        );
    }
}

export default CheckoutUtilsHeader;