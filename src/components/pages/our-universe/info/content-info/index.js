import React, { Component } from 'react';
import './index.css';

class OurContentInfo extends Component{
    render(){
        var data = this.props.OData[this.props.OActived]
        return(
            <div className="our-content-info">
                <div className="our-content-info__container">
                    <div className="our-content-info__container__content">
                        <div className="our-content-info__container__content__info-area">
                            <div className="our-content-info__container__content__info-area__subject">
                                {data.subject}
                            </div>
                            <div className="our-content-info__container__content__info-area__title">
                                <div className="our-content-info__container__content__info-area__title__t1">{data.title}</div>
                                <div className="our-content-info__container__content__info-area__title__t2">{data.by}</div>
                            </div>
                            <div className="our-content-info__container__content__info-area__image" style={{backgroundImage:'url('+data.image+')'}}/>
                            <hr />
                            <div className="our-content-info__container__content__info-area__description">{data.description}</div>
                            <div className="our-content-info__container__content__info-area__see-more">
                                <div className="our-content-info__container__content__info-area__see-more__icon"/>
                                <div className="our-content-info__container__content__info-area__see-more__text">VER MÁS</div>
                            </div>
                        </div>
                    </div>
                    <div className="our-content-info__container__image" style={{backgroundImage:'url('+data.image+')'}}/>
                </div>
            </div>
        )
    }
}

export default OurContentInfo;