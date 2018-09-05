import React, { Component } from 'react';
import './index.css';

import SM from '../../../mini_containers/sm-main/';

import NLLeft from './left/';
import NLCenter from './center/';
import NLRight from './right/';
import Header from '../../../fixed/header';
import Footer from '../../../fixed/footer';

class NewsletterArticle extends Component{
    constructor(){
        super()
        this.smallOption=['Home','Tendencias y Novedades','Superhype 2016']
    }
    
    render(){
        window.onscroll = function(){
           // console.log(window.scrollY);
        }
        
        return(
            <div className="newsletter-article"  >
                <Header />
                <div className="newsletter-article__container">
                    <div className="newsletter-article__container__sm">
                        <SM main={this.smallOption} />
                    </div>
                    <div className="newsletter-article__container__content">
                        <NLLeft />
                        <NLCenter />
                        <NLRight />
                    </div>  
                </div>
                <Footer />
            </div>
        )
    }
}

export default NewsletterArticle;