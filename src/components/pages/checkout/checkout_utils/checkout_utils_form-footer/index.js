import React, { Component } from 'react';
import './index.css'
import {withRouter} from 'react-router-dom'

class CheckoutUtilsFormFooter extends Component {
    constructor(props){
        super(props)
        this.next_page=this.next_page.bind(this)
    }
    next_page(){
        
        this.props.history.push("/"+ this.props.page)
    }
    render() {
        return (
			<div className="checkout_utils_form-footer">
                <div className="checkout_utils_form-footer__back-container"
                    onClick={()=>this.props.history.push("/checkout_review")} >
                    <div className="checkout_utils_form-footer__back-container__arrow" />
                    <div>Volver a Mis compras</div>
                </div>
                <button disabled={this.props.disabled} className="checkout_utils_form-footer__next-container"
                     onClick={this.next_page}>
                    {this.props.NextLabel}
                </button>
            </div>
        );
    }
}

export default withRouter(CheckoutUtilsFormFooter)  ;