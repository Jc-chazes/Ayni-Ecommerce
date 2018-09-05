import React, { Component } from 'react';
import './index.css';

import HomeOurEssenceMobile from './mobile/';

class HomeOurEssence extends Component{
    render(){
        return(
            <div className="home-our-essence">
                <div className="home-our-essence__text">
                    <div className="home-our-essence__text__t1">Nuestra escencia radica en</div>
                    <div className="home-our-essence__text__t2">EMPODERAR MUJERES</div>
                </div>
                <div className="home-our-essence__video">
                    <div className="home-our-essence__video__container">
                        <div className="home-our-essence__video__container__left-side"></div>
                        <div className="home-our-essence__video__container__content">
                            <div className="home-our-essence__video__container__content__clip">
                                <iframe width="754.97" height="422.23" src="https://www.youtube.com/embed/3NvM3OyXMWo" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="home-our-essence__video__container__right-side"></div>
                    </div>
                </div>
                <button>CONOCE MAS SOBRE AYNI</button>
                <HomeOurEssenceMobile />
            </div>
        )
    }
}

export default HomeOurEssence;