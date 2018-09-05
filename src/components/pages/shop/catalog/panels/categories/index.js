import React, { Component } from 'react';
import './index.css';

class ShopCatalogCategories extends Component{
    constructor(){
        super()
        this.state={
            catSelected: 0
        }
        this.selectCat=this.selectCat.bind(this)
    }
    selectCat(ind){
        this.setState({ catSelected: ind })
    }
    render(){
        const sty = { fontWeight: 'bold' };
        return(
            <div className="shop-catalog-categories">
                {this.props.categories.map((data, index)=>{
                    return(
                        <div className={this.state.catSelected===index?'shop-catalog-categories__text-selected':'shop-catalog-categories__text'} key={index} onClick={()=>this.selectCat(index)}>
                            {data}
                        </div>
                    )
                })} 
            </div>
        )
    }
}

export default ShopCatalogCategories;