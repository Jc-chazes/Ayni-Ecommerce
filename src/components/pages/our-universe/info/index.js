import React, { Component } from 'react';
import './index.css';

import OurCovPage from './cover-page/';
import OurMenuButton from './menu-button/';
import OurContentInfo from './content-info/';
import Header from '../../../fixed/header';
import Footer from '../../../fixed/footer';

class OurInfo extends Component{
    constructor(){
        super()
        this.state={
            ourBtnSelected: 0
        }
        /* Objects */
        this.btnOptions=['BIO','CSR','ALPACA']
        this.OurUniverseData=[
            {
                image: 'http://localhost:3000/images/resources/OUR-UNIVERSE_Bio-image.jpg',
                subject: 'Biography',
                title: 'Adriana Cachay y Laerke Skyum,',
                by: 'CREADORAS DE AYNI',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
                image: 'http://localhost:3000/images/resources/CSR-test-image.png',
                subject: 'Corporate Social Responsibility',
                title: 'Los Artesanos de AYNI,',
                by: 'CASOS : GLADYS Y EMILIO',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
                image: 'http://localhost:3000/images/resources/OUR%20UNIVERSE_Alpaca-image.jpg',
                subject: 'Nuestra Alpaca',
                title: 'La materia prima de AYNI',
                by: 'CASOS : GLADYS Y EMILIO',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            }
        ]
        
        /* Functions */
        this.OActiveButton=this.OActiveButton.bind(this)
    }
    OActiveButton(index){
        this.setState({ ourBtnSelected: index })
    }
    render(){
        return(
            <div className="our-info">
                <Header />
                <div className="our-info__container">
                    <OurCovPage />
                    <OurMenuButton btnOptions={this.btnOptions} OActiveButton={this.OActiveButton} OActived={this.state.ourBtnSelected} />
                    <OurContentInfo OData={this.OurUniverseData} OActived={this.state.ourBtnSelected} />
                </div>
                <Footer />    
            </div>
        )
    }
}

export default OurInfo;