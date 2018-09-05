import React, { Component } from 'react';
import './index.css';

class ArticleRight extends Component{
    render(){
        return(
            <div className="newsletter-article-right">
                <div className="newsletter-article-right__close">
                    <div className="newsletter-article-right__close__icon" />
                </div>
                <div className="newsletter-article-right__arrow">
                    <div className="newsletter-article-right__arrow__icon" />
                </div>
            </div>
        )
    }
}

export default ArticleRight;