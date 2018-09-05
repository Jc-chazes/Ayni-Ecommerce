import React,{Component} from 'react';
import './index.css'
import RemoveCard from '../remove-card/index';

class CardProduct extends Component{
    constructor(props){
        super(props)
        this.update_cant=this.update_cant.bind(this);
        this.state={number:this.props.val.cant}
        this.countDown=this.countDown.bind(this);
        this.countUp=this.countUp.bind(this);     
    }

    countUp(){
        this.setState({number:this.state.number+1})
        this.props.total(this.props.val.price)
        this.props.update_count(this.state.number+1,this.props.index)
    }
    countDown(){
        if (this.state.number>1){
            this.setState({number:this.state.number-1})
            this.props.total(-this.props.val.price)
            this.props.update_count(this.state.number-1,this.props.index)
        }

    }
    update_cant(e){
        this.props.update_count(e)
    }

    render(){
        if (this.state.number === 0){
            var enable = true
        }else{
            var enable = false
        }       
        return(
            <div key={this.props.item} className="checkout-review_products_table_row" >
                            <div className="checkout-review_products_table_row_image" style={{
                               backgroundImage: 'url(' +this.props.val.image+ ')',
                            }}/>
                            <div className="checkout-review_products_table_row_description">
                                <div className="checkout-review_products_table_row_description_name">{this.props.val.name}}</div>   
                                <div className="checkout-review_products_table_row_description_descrip">{this.props.val.description}</div>
                            </div>
                            <div className="checkout-review_products_table_row_description_color">
                                {this.props.val.color}
                            </div> 
                            <div className="checkout-review_products_table_row_description_desc">
                                 {this.props.val.size}
                            </div>
                            <div className="checkout-review_products_table_row_price">
                                S/ {this.props.val.price}
                            </div>                           
                            <div  style={{display:'flex',justifyContent:'space-around',alignItems:'center',width:143}}> 
                                <div className="quanty-selector">
                                    <div ><input type="button" className="quanty-selector_amount_minus" disabled={enable} onClick={this.countDown}/></div>
                                        <div className="quanty-selector__number">{this.state.number}</div>
                                    <div ><input type="button" className="quanty-selector_amount_plus"  onClick={this.countUp}/></div>
                                </div>
                                 
                            </div>
                            <div className="quanty-selector_total">
                                     S/{this.props.val.price*this.state.number}.00
                            </div>
                            <RemoveCard  price_total={this.props.val.price*this.props.val.cant} set_total={this.props.set_total} update={this.props.update} product={this.props.product}
                            id={this.props.index} total_item={this.props.val.price*this.state.number}/>  
                                         
            </div>
        );
    }
}
export default CardProduct;