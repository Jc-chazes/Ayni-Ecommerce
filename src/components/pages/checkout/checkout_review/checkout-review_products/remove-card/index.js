import React, { Component } from 'react';
import './index.css';

class RemoveCard extends Component{
    constructor(props){
        super(props)
        this.remove_card=this.remove_card.bind(this);
    }
    remove_card(){
        this.props.product.splice(this.props.id,1)
        this.props.update(this.props.product)
        this.props.set_total(this.props.price_total)
    }
    render(){
        
        return(
            <div className="remove-card__remove">
                <div><button onClick={this.remove_card} className="remove-card__icon"/></div>
            </div>
        );
    }
}
export default RemoveCard;