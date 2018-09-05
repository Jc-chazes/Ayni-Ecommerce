import React, { Component } from 'react';
import './index.css';

class HomeTrends extends Component{
    render(){
        return(
            <div className="home-trends">
                <div className="home-trends__title">
                    <div className="home-trends__title__t1">Tendencias y Novedades</div>
                    <div className="home-trends__title__t2">EN MODA</div>
                </div>
                <div className="home-trends__container">
                    {this.props.trendsData.map((data, index)=>{
                        return(
                            <div className="home-trends__container__content" key={index}>
                                <div className="home-trends__container__content__image" style={{backgroundImage: 'url('+data.image+')'}} />
                                <div className="home-trends__container__content__category">Categoría {data.category}</div>
                                <div className="home-trends__container__content__description">
                                    <span className="home-trends__container__content__description__caption">{data.caption}: </span>
                                    <span className="home-trends__container__content__description__body">{data.body}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="home-trends__see-more">
                    <div className="home-trends__see-more__content">
                        <div className="home-trends__see-more__content__icon" />
                        <div className="home-trends__see-more__content__text">VER MÁS</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeTrends;