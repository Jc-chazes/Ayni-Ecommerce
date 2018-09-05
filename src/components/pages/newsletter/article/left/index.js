import React, { Component } from 'react';
import './index.css';

class ArticleLeft extends Component{
    render(){
        return(
            <div className="newsletter-article-left">
                <div className="newsletter-article-left__social-icons">
                    <div className="newsletter-article-left__social-icons__insta"/>
                    <div className="newsletter-article-left__social-icons__fb"/>
                    <div className="newsletter-article-left__social-icons__twitter"/>
                </div>
                <div className="newsletter-article-left__arrow">
                    <div className="newsletter-article-left__arrow__icon"/>
                </div>
            </div>
        )
    }
}

export default ArticleLeft;