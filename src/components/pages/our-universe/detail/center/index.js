import React, { Component } from 'react';
import './index.css';

class OurUnivDetailCenter extends Component{
    constructor(){
        super()
        this.biographyData=[
            {
                section: 'MODA',
                title: 'About AYNI',
                description: 'AYNI WAS CREATED OUT OF A COMMON LOVE FOR HIGH QUALITY PRODUCTS, NATURE’S FINEST MATERIALS AND STRONG SOCIAL, ECONOMIC AND ENVIROMENTAL ENGAGEMENT. <br/><br/>THE PRODUCTS ARE CREATED IN PERU, A COUNTRY WITH ONE OF THE WORLDS FASTEST GROWING ECONOMIES, USING ONLY THE MOST EXCLUSIVE PERUVIAN MATERIALS SUCH AS THE LUXURIOUS BABY ALPACA AND THE FAMOUS PIMA COTTON. <br/><br/>THROUGH AYNI WE SEEK TO SET AN EXAMPLE TO THE REST OF THE FASHION AND APPAREL INDUSTRY BY SHOWING HOW ETHICS AND AESTHETICS CAN JOIN HANDS AND ENCOURAGE TO A MORE CONSCIENCE LIFE STYLE AND CONSUMPTION.',
                images: ['','http://localhost:3000/images/our-univ-detail-img2.png']
            },
            {
                section: null,
                title: 'Founders',
                description: 'ADRIANA IS PERUVIAN, LAERKE IS DANISH. TOGETHER THEY FOUNDED AYNI CORP, OF WHICH THE BRAND AYNI IS ONE OF THE BRANCHES AS WELL AS THE SOURCING AGENCY AYNI DESIGN LAB. <br/><br/>IT ALL BEGAN WITH A COMMON INTEREST OF DOING RESPONSIBLE BUSINESS, WHICH COULD CONTRIBUTE TO SUSTAINABLE DEVELOPMENT FOR ALL PARTIES INVOLVED IN THE VALUE CHAIN. <br/><br/>ADRIANA AND LAERKE BROUGHT TOGETHER DANISH DESIGN, MINIMALISM, SOPHISTICATION AND CONSCIOUS LIFESTYLE AND CONSUMPTION MODEL – COMBINED WITH EXCLUSIVE HIGH QUALITY PERUVIAN MATERIALS AND ANCIENT HANDCRAFT TRADITIONS. <br/><br/>THE FIRST COLLECTION OF AYNI WAS LAUNCHED IN PARIS 2009 AND SINCE THEN WE HAVE PRESENTED THE COLLECTIONS IN FASHION CAPITALS AROUND THE WORLD INCLUDING COPENHAGEN, PARIS, LONDON AND NEW YORK.',
                images: ['http://localhost:3000/images/our-univ-detail-img3.png']
            }
        ]
    }
    cleanBreak(str){ /* it's not being used */
        return str
                .replace(/<br >/g, "<br />")
                .replace(/<br \/>/g, "<br />")
                .replace(/<br\/>/g, "<br />");
    }
    render(){
        return(
            <div className="our-univ-detail-center">
                <div className="our-univ-detail-center__content">
                    <div className="our-univ-detail-center__content__section">MODA</div>
                    <div className="our-univ-detail-center__content__title">About AYNI</div>
                    <div className="our-univ-detail-center__content__hr"><hr /></div>
                    <div className="our-univ-detail-center__content__description">AYNI WAS CREATED OUT OF A COMMON LOVE FOR HIGH QUALITY PRODUCTS, NATURE’S FINEST MATERIALS AND STRONG SOCIAL, ECONOMIC AND ENVIROMENTAL ENGAGEMENT. <br/><br/>THE PRODUCTS ARE CREATED IN PERU, A COUNTRY WITH ONE OF THE WORLDS FASTEST GROWING ECONOMIES, USING ONLY THE MOST EXCLUSIVE PERUVIAN MATERIALS SUCH AS THE LUXURIOUS BABY ALPACA AND THE FAMOUS PIMA COTTON. <br/><br/>THROUGH AYNI WE SEEK TO SET AN EXAMPLE TO THE REST OF THE FASHION AND APPAREL INDUSTRY BY SHOWING HOW ETHICS AND AESTHETICS CAN JOIN HANDS AND ENCOURAGE TO A MORE CONSCIENCE LIFE STYLE AND CONSUMPTION.</div>
                    <div className="our-univ-detail-center__content__image">
                        <div className="our-univ-detail-center__content__image__pic1"/>
                        <div className="our-univ-detail-center__content__image__pic2"/>
                    </div>
                </div>
                {/***********************/}
                <div className="our-univ-detail-center__content">
                    <div className="our-univ-detail-center__content__title">Founders</div>
                    <div className="our-univ-detail-center__content__hr"><hr /></div>
                    <div className="our-univ-detail-center__content__description">ADRIANA IS PERUVIAN, LAERKE IS DANISH. TOGETHER THEY FOUNDED AYNI CORP, OF WHICH THE BRAND AYNI IS ONE OF THE BRANCHES AS WELL AS THE SOURCING AGENCY AYNI DESIGN LAB. <br/><br/>IT ALL BEGAN WITH A COMMON INTEREST OF DOING RESPONSIBLE BUSINESS, WHICH COULD CONTRIBUTE TO SUSTAINABLE DEVELOPMENT FOR ALL PARTIES INVOLVED IN THE VALUE CHAIN. <br/><br/>ADRIANA AND LAERKE BROUGHT TOGETHER DANISH DESIGN, MINIMALISM, SOPHISTICATION AND CONSCIOUS LIFESTYLE AND CONSUMPTION MODEL – COMBINED WITH EXCLUSIVE HIGH QUALITY PERUVIAN MATERIALS AND ANCIENT HANDCRAFT TRADITIONS. <br/><br/>THE FIRST COLLECTION OF AYNI WAS LAUNCHED IN PARIS 2009 AND SINCE THEN WE HAVE PRESENTED THE COLLECTIONS IN FASHION CAPITALS AROUND THE WORLD INCLUDING COPENHAGEN, PARIS, LONDON AND NEW YORK.</div>
                    <div className="our-univ-detail-center__content__lonely-image" />
                </div>
                {/* CLOSE */}
                <div className="our-univ-detail-center__close">
                    <div className="our-univ-detail-center__close__icon"/>
                    <div className="our-univ-detail-center__close__text">Cerrar</div>
                </div>
            </div>
        )
    }
}

export default OurUnivDetailCenter;