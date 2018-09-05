import React, { Component } from 'react';
import './index.css';
import Home from '..';

class HomeSubscription extends Component{
    render(){
        return(
            <div className="home-subscription">
                <div className="home-subscription__content">
                    <div className="home-subscription__content__title">SUSCRÍBETE</div>
                    <div className="home-subscription__content__input">
                        <input type="text" placeholder="Ingresa tu correo . . ." />
                    </div>
                    <div className="home-subscription__content__text">
                        Sé el primero en saber acerca de lo último!
                    </div>
                </div> 
            </div>
        )
    }
}

export default HomeSubscription;