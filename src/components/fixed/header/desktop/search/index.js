import React, { Component } from 'react';
import './index.css';

class HeaderSearch extends Component{
    render(){
        return(
            <div className="header-search">
                <div className="header-search__container">
                    <input placeholder="Buscar" />
                </div>
            </div>
        )
    }
}

export default HeaderSearch;