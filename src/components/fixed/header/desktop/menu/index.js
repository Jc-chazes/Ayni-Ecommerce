import React, { Component } from 'react';
import './index.css';

class HeaderMenu extends Component{
    render(){
        return(
            <div className="header-menu">
                <div className="header-menu__container">
                    {this.props.options.map((data, index)=>{
                        return(
                            data.text==='STORE'?null: /* hide "STORE" option for desktop version */
                            <div className="header-menu__container__option" key={index}>
                                <div className="header-menu__container__option__text">{data.text}</div>
                                {index===2||index===3?
                                    <div className="header-menu__container__option__icon"/>:null
                                }                             
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default HeaderMenu;