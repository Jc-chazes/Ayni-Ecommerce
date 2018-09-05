import React, { Component } from 'react';
import './index.css';

class OurCoverPage extends Component{
    render(){
        return(
            <div className="our-cover-page">
                <div className="our-cover-page__content">
                    <div className="our-cover-page__content__logo"/>
                    <div className="our-cover-page__content__text">
                        <div className="our-cover-page__content__text__transparent-white">TODAY FOR YOU, TOMORROW FOR ME.</div>
                        <div className="our-cover-page__content__text__white">Adriana & Laerke</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurCoverPage;