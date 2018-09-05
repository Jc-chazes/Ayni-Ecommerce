import React, { Component } from 'react';
import './index.css';

class ShopCatalogOrderBy extends Component{
    constructor(){
        super()
        this.state={
            orderBySelected: 0
        }        
        this.selectOption=this.selectOption.bind(this)
    }
    selectOption(index){
        this.setState({ orderBySelected: index })
    }
    render(){
        return(
          <div className="shop-catalog-order-by">
                <div className="shop-catalog-order-by__label">ORDENAR POR:</div>
                <div className="shop-catalog-order-by__options">
                {this.props.options.map((data, index)=>{
                    return(
                        <div className="shop-catalog-order-by__options__content" onClick={()=>this.selectOption(index)} key={data}>
                            <div className={this.state.orderBySelected===index?
                            'shop-catalog-order-by__options__content__marker-selected':
                            'shop-catalog-order-by__options__content__marker'} />
                            <div className="shop-catalog-order-by__options__content__text">{data}</div>
                        </div>
                    )
                })}  
                </div>
          </div>
        )
    }
}

export default ShopCatalogOrderBy;