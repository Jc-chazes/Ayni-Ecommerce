import React, { Component } from 'react';
import './index.css';

import SDetail from './sdetail/';
import SSugestion from './ssuggestions/';
import Header from '../../../fixed/header';
import Footer from '../../../fixed/footer';

class ShopDetail extends Component{
    constructor(){
        super()
        this.proDetail=[
            {
                id: 1,
                name: 'TEST PRODUCT',
                price: 190.00,
                image: ['http://localhost:3000/images/resources/Home%20-%20User-image5.jpg',
                        'http://localhost:3000/images/resources/Home%20-%20User-image3.jpg',
                        'http://localhost:3000/images/resources/Home%20-%20Shop%20despliegue-image3.jpg']
            }
        ]
    }
    render(){
        return(
            <div className="shop-detail">

                <div className="shop-detail__container">
                    <SDetail proData={this.proDetail} />
                    <SSugestion />
                </div>
                
            </div>
        )
    }
}

export default ShopDetail;
