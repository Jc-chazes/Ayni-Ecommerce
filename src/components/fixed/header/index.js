import React, { Component } from 'react';
import './index.css';

import Mobile from './mobile/';
import Desktop from './desktop/';

class Header extends Component{
    constructor(){
        super()
        this.menuOptions=[
            {text: 'HOME', subtext: ''},
            {text: 'OUR UNIVERSE', subtext: ''},
            {text: 'SHOP', subtext: 'All clothes'},
            {text: 'COLLECTIONS', subtext: 'Spring Summer & Fall Winter'},
            {text: 'NEWSLETTER', subtext: ''},
            {text: 'STORE', subtext: ''}
        ]
    }
    render(){
        var checked = this.props.onView
        return(
            <div className="header">
                <Desktop options={this.menuOptions} />
                <Mobile options={this.menuOptions} selected={checked} />
            </div>
        )
    }
}

export default Header;