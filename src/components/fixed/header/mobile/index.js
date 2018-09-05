import React, { Component } from 'react';
import './index.css';

import Options from './main/';

class HeaderMobile extends Component{
    constructor(){
        super()
        this.state={
            activeMain: false
        }
        this.footerOptions=['SIZE GUIDE','SHIPPING & RETURNS','PAYMENT METHODS','FREQUENT QUESTIONS']
        this.showMain=this.showMain.bind(this)
    }
    showMain(){
        this.setState({ activeMain: !this.state.activeMain })
    }
    render(){
        return(
            <div className="header-mobile">
                <div className="header-mobile__top">
                    <div className="header-mobile__top__main-logo">
                        <div className="header-mobile__top__main-logo__main" onClick={this.showMain} />
                        <div className="header-mobile__top__main-logo__logo" />
                    </div>
                    <div className="header-mobile__top__icons">
                        <div className="header-mobile__top__icons__search" />
                        <div className="header-mobile__top__icons__user" />
                        <div className="header-mobile__top__icons__purchases" />
                    </div>
                </div>
                <Options options={this.props.options} footerOptions={this.footerOptions} show={this.state.activeMain} updateShow={this.showMain} optionChecked={this.props.selected} />
            </div>
        )
    }
}

export default HeaderMobile;