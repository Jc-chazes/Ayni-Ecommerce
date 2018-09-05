import React, { Component } from 'react';
import './index.css';

class ShopMobileDarkComponent extends Component{
    constructor(){
        super()
        this.state={
            checkIndex: null
        }
    }
    updateCheck(index){
        this.setState({ checkIndex: index })
    }
    render(){
        const check = { backgroundImage: ('url(http://localhost:3000/icons/sharp_check_white_18dp.png)') }
        const hidden= { display: 'none' }

        /* PROPS STATE */
        const deployST = this.props.deployState;
        return(
            <div className="shop-mobile-dark-component" style={deployST===false?hidden:null}>
                {this.props.option.map((data, index)=>{
                    return(
                        <div className="shop-mobile-dark-component__content" key={index} onClick={()=>this.updateCheck(index)}>
                            <div className="shop-mobile-dark-component__content__icon" style={this.state.checkIndex===index?check:null}/>
                            <div className="shop-mobile-dark-component__content__text">{data}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ShopMobileDarkComponent;