import React, { Component } from 'react';
import './index.css';

import Mobile from './mobile/';
import Desktop from './desktop/';

class Header extends Component{
    constructor(){
        super()
        this.menuOptions=[
            {text: 'HOME', subtext: '',route:"/"},
            {text: 'OUR UNIVERSE', subtext: '',route:"/our-universe"},
            {text: 'SHOP', subtext: 'All clothes',route:"/shop-catalog"},
            {text: 'COLLECTIONS', subtext: 'Spring Summer & Fall Winter',route:"/"},
            {text: 'NEWSLETTER', subtext: '',route:"/news-letter"},
            {text: 'STORE', subtext: '',route:"/option-panel"}
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
