import React, { Component } from 'react';
import './index.css';
import ShopCatalog from '../..';

class ShopCatalogSizes extends Component{
    constructor(){
        super()
        this.state={
            sizeSelected: 0
        }
        this.sizeActive=this.sizeActive.bind(this)
    }
    sizeActive(index){
        this.setState({
            sizeSelected: index
        })
    }
    render(){
        return(
            <div className="shop-catalog-sizes">
                {this.props.sizes.map((data,index)=>{
                    return(
                        <div className="shop-catalog-sizes__content" key={index} onClick={()=>this.sizeActive(index)}>
                            <div className={this.state.sizeSelected===index?
                            'shop-catalog-sizes__content__marker-selected':'shop-catalog-sizes__content__marker'}>
                                <p className={this.state.sizeSelected===index?'size-checked':'size-nochecked'}>✓</p>
                            </div>
                            <div className="shop-catalog-sizes__content__text">{data}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ShopCatalogSizes;