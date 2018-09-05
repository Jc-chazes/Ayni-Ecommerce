import React, { Component } from 'react';
import './index.css';

class MobileOptionAllGarments extends Component{
    
    render(){
        const noBorder = { border: 'none' }
        const hidden = { display: 'none' }
        var len = this.props.garmentsOption.length - 1 
        var deploySt = this.props.deployState /* deployGarments state */
        return(
            <div className="mobile-option-all-garments" style={deploySt===false?hidden:null}>
                {this.props.garmentsOption.map((data, index)=>{
                    return(
                        <div key={index} className="mobile-option-all-garments__content" 
                        style={index>=len?noBorder:null}>{data}</div>
                    )
                })}
                
            </div>
        )
    }
}

export default MobileOptionAllGarments;