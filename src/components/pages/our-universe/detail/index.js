import React, { Component } from 'react';
import './index.css';

import SM from '../../../mini_containers/sm-main/';
import OULeft from './left/';
import OUCenter from './center/';
import OURight from './right/';
import Header from '../../../fixed/header';
import Footer from '../../../fixed/footer';

class OurUnivDetail extends Component{
    constructor(){
        super()
        this.smOurUnivDetailOptions = ['Home','Our Universe','Biography']
    }
    render(){
        return(
            <div className="our-univ-detail">
                <Header />
                <div className="our-univ-detail__container">
                    <div className="our-univ-detail__container__sm-main">
                        <SM main={this.smOurUnivDetailOptions} />
                    </div>
                    <div className="our-univ-detail__container__content">
                        <OULeft />
                        <OUCenter />
                        <OURight />
                    </div>
                    <div className="our-univ-detail__container__close"></div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default OurUnivDetail;