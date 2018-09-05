import React, { Component } from 'react';
import './index.css';

class OurUnivDetailLeft extends Component{
    render(){
        return(
            <div className="our-univ-detail-left">
                <div className="our-univ-detail-left__social-icons">
                    <div className="our-univ-detail-left__social-icons__insta" />
                    <div className="our-univ-detail-left__social-icons__fb" />
                    <div className="our-univ-detail-left__social-icons__twitter" />
                </div>
            </div>
        )
    }
}

export default OurUnivDetailLeft;