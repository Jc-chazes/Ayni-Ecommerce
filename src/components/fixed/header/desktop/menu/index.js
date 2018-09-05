import React, { Component } from 'react';
import './index.css';
import {BrowserRouter as Router,NavLink}  from 'react-router-dom';
import ShopCatalog from '../../../../pages/shop/catalog/index.js';
import Route from 'react-router-dom/Route';
import { withRouter } from 'react-router-dom';

class HeaderMenu extends Component{
    render(){
        return(
            <div className="header-menu">
                <div className="header-menu__container">
                    {this.props.options.map((data, index)=>{
                        return(
                            data.text==='STORE'?null: /* hide "STORE" option for desktop version */
                            <div className="header-menu__container__option" key={index}>
                                <div onClick={()=>this.props.history.push(data.route)} className="header-menu__container__option__text">
                                    <div>{data.text}</div>
                                </div>
                                {/* {index===2||index===3?
                                    <div className="header-menu__container__option__icon"/>:null
                                } */}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default withRouter(HeaderMenu);
