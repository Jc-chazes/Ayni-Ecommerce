import React, { Component } from 'react';
import './index.css'
import CheckoutUtilsHeader from '../../checkout_utils/checkout_utils_header'
import CheckoutUtilsFormTitle from '../../checkout_utils/checkout_utils_form-title'
import CheckoutUtilsFormButtons from '../../checkout_utils/checkout_utils_form-buttons'
import FormCard from './form-card/form';
import axios from 'axios';

class CheckoutNonAccountBilling extends Component {
    constructor(props){
        super(props)
        this.optionMonth=["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
        this.optionYear=[2018, 2019, 2020, 2021, 2022, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029]
        this.generator=this.generator.bind(this);
    }

    token(){
        // var Culqi= window.Culqi
        // Culqi.init()
        // Culqi.publicKey = 'pk_test_broPKdGRqxSFPoqO';
        // Culqi.createToken();

        // console.log('culqui',Culqi)
    }
    generator(){
      
        var data = {
            card_number: '4444333322221111',
            cvv: '123',
            expiration_month: '09',
            expiration_year: '2020',
            email: 'richard@piedpiper.com'
          };
        var headers = {
            'Content-Type':'application/json',
            'Authorization': 'Bearer pk_test_broPKdGRqxSFPoqO'
        }
        axios.post('https://api.culqi.com/v2/tokens',  {'headers' : headers},data)
    
            .then((response) => {
                console.log('entro',response)
            })
            .catch(function (error){
                console.log('entro',error);
            })

          

        // axios.post('https://api.culqi.com/v2/tokens',
        //     headers {
        //         "Content-type": "application/json",
        //         "Authorization": "Bearer pk_test_broPKdGRqxSFPoqO"
        //     },
        //         body={
        //             "card_number": "4444333322221111",
        //             "cvv": "123",
        //             "expiration_month": "09",
        //             "expiration_year": "2020",
        //             "email": "richard@piedpiper.com"
        //     }


        // )
        //     .then(json=> console.log(json))
        //     .catch(function (error){
        //         console.log(error);
        //     })




        // var Culqi= window.Culqi

        //     if(Culqi.token) { // ¡Token creado exitosamente!
        //         // Get the token ID:
        //         var token = Culqi.token.id;
        //         alert('Se ha creado un token:'.token);

        //     }else{ // ¡Hubo algún problema!
        //         // Mostramos JSON de objeto error en consola
        //         console.log(Culqi.error);

        //     }




    }

    render() {
        return (
			<div className="checkout_non-account_billing">
                <CheckoutUtilsHeader urlImage="header-check-pay"/>
                <div className="checkout_non-account_billing__container">
                    <div className="checkout_non-account_billing__container__form">
                        <CheckoutUtilsFormTitle pathIcon="pay-icon" title="2. MÉTODO DE PAGO" width="185px"/>
                        <CheckoutUtilsFormButtons label1="Tarjeta de crédito o debito" label2="Pago contra entrega: Efectivo"/>
                        <div className="checkout_non-account_billing__container__form__content">
                            <div className="checkout_non-account_billing__container__form__content__label-top">
                                Aceptamos tarjetas de Crédito (Visa, MasterCard y American Express) y Débito (Visa).
                            </div>
                            {/* <FormCard/> */}

                            <form action="" method="POST" id="culqi-card-form">
                                <div>
                                <label>
                                <span>Correo Electrónico</span>
                            <input type="text" size="50" id="card[email]"/>
                            </label>
                        </div>
                        <div>
                            <label>
                            <span>Número de tarjeta</span>
                            <input type="text" size="20" id="card[number]"/>
                            </label>
                        </div>
                        <div>
                            <label>
                            <span>CVC</span>
                            <input type="text" size="4" id="card[cvv]"/>
                            </label>
                        </div>
                        <div>
                            <label>
                            <span>Fecha expiración (MM/YYYY)</span>
                            <input type="text" size="2" id="card[exp_month]"/>
                            </label>
                            <span>/</span>
                            <input type="text" size="4" id="card[exp_year]"/>

                        </div>

                        </form>

                        <button onClick={this.token} style={{width:200,height:200,backgroundColor:'coral'}}/>
                        <button onClick={this.generator} style={{width:200,height:200}}/>


                        </div>
                        <div className="checkout_non-account_billing__container__form__content__label-button">
                                Se realizará un cobro por primer pedido, luego se realizará el reembolso S/ 5.00
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default CheckoutNonAccountBilling;