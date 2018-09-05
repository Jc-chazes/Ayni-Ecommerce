import React, { Component } from 'react';
import './index.css';

class NewsletterMainButtons extends Component{
    render(){
        const checked = { backgroundColor: '#686260', color: 'white' } /* Checked style */
        return(
            <div className="newsletter-main-buttons">
                <div className="newsletter-main-buttons__container">
                    {this.props.options.map((data, index)=>{
                        return(
                            <div className="newsletter-main-buttons__container__content" key={index}>
                                <button key={index} onClick={()=>this.props.selectButton(index)} style={this.props.selected===index?checked:null}>{data}</button>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        )
    }
}

export default NewsletterMainButtons;