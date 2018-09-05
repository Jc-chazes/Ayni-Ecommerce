import React, { Component } from 'react';
import './index.css';

import Swiper from 'react-id-swiper';
import 'swiper/dist/css/swiper.min.css';

class HomeBestGarmentsMobilePics extends Component{
    render(){
        return(
                <Swiper>
                    {this.props.dataGarments.map((data, i)=>{
                        //var arrData = data.name[i].split(" ");
                        return(
                            <div className="home-best-garments-mobile-pics">
                                <div className="home-best-garments-mobile-pics__container" style={{backgroundImage: 'url('+data.image+')'}}>
                                    <div className="home-best-garments-mobile-pics__container__text">
                                        <div className="home-best-garments-mobile-pics__container__text__name">
                                            {data.name}
                                        </div>
                                        <div className="home-best-garments-mobile-pics__container__text__price">S/ {data.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</div>
                                        <button>AGREGAR A COMPRAS</button>
                                    </div>
                                    <div className="home-best-garments-mobile-pics__container__footer">
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Swiper>
                    
       
        )
    }
}

export default HomeBestGarmentsMobilePics;