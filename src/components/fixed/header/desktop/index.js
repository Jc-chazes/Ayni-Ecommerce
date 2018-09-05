import React, { Component } from 'react';
import './index.css';

import Logo from './logo/';
import Menu from './menu/';
import Search from './search/';

class HeaderDesktop extends Component{
    render(){
        return(
            <div className="header-desktop">
                <Logo />
                <Menu options={this.props.options} />
                <Search />
            </div>
        )
    }
}

export default HeaderDesktop;