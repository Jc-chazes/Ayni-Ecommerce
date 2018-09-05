import React, { Component } from 'react';
import './index.css'

class QuantySelector extends Component{
    constructor(props){
        super(props)
        this.state={number:this.props.cant}
        this.countDown=this.countDown.bind(this);
        this.countUp=this.countUp.bind(this);       
    }
  
    countUp(){
        this.setState({number:this.state.number+1})
        this.props.total(this.props.price)
        this.props.update_count(this.state.number+1,this.props.id)
    }
    countDown(){
        
        this.setState({number:this.state.number-1})
        this.props.total(-this.props.price)
        this.props.update_count(this.state.number,this.props.id)
    }
    render(){
        
        console.log('chekaaa',this.props.cant)
        console.log('state',this.state.number)
        if (this.state.number === 0){
            var enable = true
        }else{
            var enable = false
        }            
        return(         
            <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',width:245}}> 
                <div className="quanty-selector">
                    <div ><input type="button" className="quanty-selector_amount_minus" disabled={enable} onClick={this.countDown}/></div>
                        <div className="quanty-selector__number">{this.state.number}</div>
                    <div ><input type="button" className="quanty-selector_amount_plus"  onClick={this.countUp}/></div>
                </div>
               
            </div>
        );
    }
}  
export default QuantySelector;