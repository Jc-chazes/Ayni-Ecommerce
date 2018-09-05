import React, { Component } from 'react';
import './index.css'

import { GoogleApiWrapper } from 'google-maps-react' 
import CheckoutUtilsMap from '../../checkout_utils/checkout_utils_map'
import CheckoutUtilsHeader from '../../checkout_utils/checkout_utils_header'
import CheckoutUtilsFormButtons from '../../checkout_utils/checkout_utils_form-buttons'
import CheckoutUtilsFormFooter from '../../checkout_utils/checkout_utils_form-footer'
import CheckoutUtilsFormTitle from '../../checkout_utils/checkout_utils_form-title'
import Form from './form/form'

class CheckoutNonAccountInfo extends Component {
    constructor(props){
        super(props)
        this.changeData=this.changeData.bind(this)
        this.data={
            name:'',
            direction:'Lima',
            interior:'',
            phone:'',
            instruction:'',
            mail:'',
        }
        this.state={
            direction: 'Lima'
        }
    }
    changeData(e){    
        this.data[e.target.name] =  e.target.value
        if (e.target.name === 'direction'){
            this.setState({direction:e.target.value})
        }
        
    }
    
   
	render() {
        // console.log(this.props.requestInfo)
        // const panel_map = ()=>{
        //     if (!/Mobi/.test(navigator.userAgent)) 
        //         return(
        //             <CheckoutUtilsMap widthContainer={45} google={ this.props.google } address={this.state.direction}/>
        //         );
        // }
		return (
			<div className="checkout-non-account-info">
                
                <CheckoutUtilsHeader urlImage="header-check-info"/>
				
                <div className="checkout-non-account-info__container">
                    <div className="checkout-non-account-info__container__column-info">
                        <CheckoutUtilsFormTitle pathIcon="entrega-icon" title="1. Entrega" width="125px"/>

                        <CheckoutUtilsFormButtons label1="Envío a domicilio" label2="Recoger en tienda"/>

                        <div className="checkout-non-account-info__container__column-info__form">
                            <div className="checkout-non-account-info__container__column-info__form__title">Ingresa tus datos de envío:</div>
                           <Form/>
                        </div>
                        <div className="checkout-non-account-info__container__column-info__sheddule">
                            Entregas de Lunes - Viernes 8am - 8pm y Sábados 8am - 2pm
                        </div>

               
                    </div>
                    {/* { panel_map() } */}
                    
                </div>
      		</div>
    	);
  	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDytgdQpZFXlzTx2_JWIBJtDQdkEAiMzMc',
  })(CheckoutNonAccountInfo);