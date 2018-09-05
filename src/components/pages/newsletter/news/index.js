import React, { Component } from 'react';
import './index.css';

import NLCoverPage from './cover-page/';
import NLMainButtons from './main-buttons/';
import NLBody from './body';

import Header from '../../../fixed/header/';
import SMMain from '../../../mini_containers/sm-main/';
import Footer from '../../../fixed/footer';

class NewsletterNews extends Component{
    constructor(){
        super()
        this.state={
            mainButton: 0
        }
        this.buttonsOption=['Recientes','Moda','Celebrities','Prensa','Viajes','Otros']
        this.smOptionNews = ['Home','Newsletter']

        this.selectMainOption=this.selectMainOption.bind(this)
    }
    selectMainOption(index){
        this.setState({ mainButton: index })
    }
    render(){
        return(
            <div className="newsletter-news">
                <div className="newsletter-news__container">
                    <div className="newsletter-news__container__smmain"><SMMain main={this.smOptionNews} /></div>
                    <NLCoverPage />
                    <NLMainButtons options={this.buttonsOption} selectButton={this.selectMainOption} selected={this.state.mainButton} />
                    <NLBody datacol1={this.props.dataBody} />
                </div>
            </div>
        )
    }
}

export default NewsletterNews;
