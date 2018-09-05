import React, { Component } from 'react';
import './index.css';

class NewsletterCoverPage extends Component{
    render(){
        return(
            <div className="newsletter-cover-page">
                <div className="newsletter-cover-page__background">
                    <div className="newsletter-cover-page__background__content">
                        <div className="newsletter-cover-page__background__content__text1">MODA</div>
                        <div className="newsletter-cover-page__background__content__text2">Superhype 2016</div>
                        <div className="newsletter-cover-page__background__content__text3">Una reseña increíble sobre un estilo completamente diferente y en tendencia...</div>
                        <div className="newsletter-cover-page__background__content__button"><button>EMPEZAR</button></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsletterCoverPage;