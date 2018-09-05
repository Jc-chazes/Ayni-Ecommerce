import React, { Component } from 'react';
import './index.css';

class ShopCatalogSmallMain extends Component{
    constructor(){
        super()
        this.state={
            mainSelected: 2
        }
        this.mainActive=this.mainActive.bind(this)
    }
    mainActive(index){
        this.setState({
            mainSelected: index
        })
    }
    render(){
        return(
            <div className="shop-catalog-small-main">
                {this.props.main.map((data,index)=>{
                    return(
                        <div className={this.state.mainSelected===index?'shop-catalog-small-main__text-selected':
                        'shop-catalog-small-main__text'}  key={data} onClick={()=>this.mainActive(index)}>
                            {data}
                            {index!==this.props.main.length-1?
                                <div className="shop-catalog-small-main__slash">&nbsp;/</div>:''
                            }  
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ShopCatalogSmallMain;