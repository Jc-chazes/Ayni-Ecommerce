import React, { Component } from 'react';
import './index.css';

import PicsMobile from './pics_mobile/';

import SLDD from './new_arrivals';


class HomeBestGarments extends Component{

    render(){
        const Sale = this.props.dataGarments.map((data, position)=>{
            return(   
                <div className="home-best-garments__pics__data" key={position}>
                    <div className="home-best-garments__pics__data__image" style={{backgroundImage: 'url('+data.image+')'}} />
                    <div className="home-best-garments__pics__data__text">
                        <div className="home-best-garments__pics__data__text__name">{data.name}</div>
                        <div className="home-best-garments__pics__data__text__price">S/ {data.price}</div>
                    </div>  
                </div>
            )
        })

        return(
            <div className="home-best-garments">
                <div className="home-best-garments__text">
                    <div className="home-best-garments__text__up">Las mejores prendas para ti,</div>
                    <div className="home-best-garments__text__down">A LA VENTA</div>
                </div> 
                <div className="home-best-garments__pics">  
                    {Sale}
                    {/*<SLDD product_ranked={this.props.dataGarments} width_container={348} height_container={440} />  */}
                </div>
                <PicsMobile dataGarments={this.props.dataGarments} />
                <div className="home-best-garments__see-more">
                    <div className="home-best-garments__see-more__icon" /> VER MÁS
                </div>
            </div>
        )
    }
}

export default HomeBestGarments;