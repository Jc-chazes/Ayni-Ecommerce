import React, { Component } from 'react';
import './index.css';

class ShopCatalogColors extends Component{
    constructor(){
        super()
        this.state={
            colorSelected: -1
        }
        this.colorActive=this.colorActive.bind(this)
    }
    colorActive(index){
        this.setState({
            colorSelected: index
        })
    }
    render(){
        return(
            <div className="shop-catalog-colors">
                {this.props.colors.map((data,index)=>{
                    return(
                        <div className="shop-catalog-colors__content" key={index} onClick={()=>this.colorActive(index)}>
                            <div className={this.state.colorSelected===index?
                            'shop-catalog-colors__content__marker-selected':'shop-catalog-colors__content__marker'} >
                                <p className={this.state.colorSelected===index?'color-checked':'color-nochecked'}>✓</p>
                            </div>
                            <div className="shop-catalog-colors__content__text">{data}</div>
                        </div>
                    )
                })}   
            </div>
        )
    }
}

export default ShopCatalogColors;