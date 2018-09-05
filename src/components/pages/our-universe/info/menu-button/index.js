import React, { Component } from 'react';
import './index.css';

class OurMenuButton extends Component{
    render(){
        const btnSelected = { color: 'white', backgroundColor: '#686260' }
        return(
            <div className="our-menu-button">
                <div className="our-menu-button__container">
                    {this.props.btnOptions.map((text, index)=>{
                        return(
                            <button key={index} onClick={()=>this.props.OActiveButton(index)}
                            style={this.props.OActived===index?btnSelected:null}>{text}</button>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default OurMenuButton;