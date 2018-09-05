import React, { Component } from 'react';
import './index.css';
import Header from '../..';

class HeaderMobileMain extends Component{
    render(){
        var showMain = this.props.show;
        const hide = { transform: 'translateX(-100%)' }

        /* Catch text from property */
        var selected = this.props.optionChecked
        const selectedStyle = { fontFamily: 'GOTHAM-BLACK' }

        return(
            <div className="header-mobile-main" style={showMain===false?hide:null}>
                <div className="header-mobile-main__top">
                    <div className="header-mobile-main__top__close-icon" onClick={this.props.updateShow} />
                    <div className="header-mobile-main__top__text">MENÚ</div>
                </div>
                <div className="header-mobile-main__content">
                    {this.props.options.map((data,index)=>{
                        return(
                            <div className="header-mobile-main__content__data" key={index}>
                                <div className="header-mobile-main__content__data__text" style={selected===data.text?selectedStyle:null}>{data.text}</div>
                                <div className="header-mobile-main__content__data__subtext" style={selected===data.text?selectedStyle:null}>{data.subtext}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="header-mobile-main__footer">
                    {this.props.footerOptions.map((data, index)=>{
                        return(
                            <div className="header-mobile-main__footer__content" key={index}>{data}</div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default HeaderMobileMain;