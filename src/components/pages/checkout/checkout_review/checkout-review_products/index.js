import React, { Component } from 'react';
import './index.css';
import MenuOptions from './menu_options/';
import CardProduct from './card_product/index';
import { withRouter } from 'react-router-dom';

class CheckoutReviewProducts extends Component {
    constructor(props){
        super(props)
        this.total=this.total.bind(this);
        this. set_id_active=this. set_id_active.bind(this);
        this.set_option_active=this.set_option_active.bind(this);
        this.set_total=this.set_total.bind(this);
        this.state={total:this.props.mount_total,
                    id_on:0,
                    option_on:0}
    }
    total(e){
        this.setState({total:this.state.total + e})
    }
    set_id_active(e){
        this.setState({
          id_on:e
        });
    }
    set_option_active(e){
        this.setState({
            option_on:e
          });
    }
    set_total(e){
        this.setState({total:this.state.total-e})
    }
	render() {
		return (
			<div className="checkout-review_products">
                <div className="checkout-review_products_table">
                    
                    <div className="checkout-review_products_table__cantBuy">
                        <div>MIS COMPRAS({this.props.products_selected.length})</div>
                    </div>
                    <div className="checkout-review_products_table_header">
                        <div style={{ width: 80}}>Elemento</div>
                        <div className='checkout-review_products_table_header__item' style={{display:'flex',width:811,justifyContent:'space-between',
                        transform: 'translateX(-82px)'}}>
                            <div style={{ width: 90}}>Color</div>
                            <div style={{ width: 90}}>Talla</div>
                            <div style={{ width: 90}}>Precio</div>
                            <div style={{ width: 90}}>Cantidad</div>
                            <div style={{ width: 90,transform: 'translate(-25px)'}}>Total</div>
                        </div>
                    </div>
                    { this.props.products_selected.map((val, index) =>
                        <div style={{display:'flex',width:'100%'}}>
                            <CardProduct  set_total={this.set_total} val={val} index={index} update={this.props.update} product={this.props.products_selected} total={this.total}
                            update_count={this.props.update_count}  update={this.props.update}  product={this.props.products_selected} id={index}/>
                             
                        </div>
                    )}

                    <div className='checkout-container' style={{display:'flex',width:'100%',justifyContent:'space-between',}}>
                        <div  className="checkout-review_products_table_promotion" ><input type="email" className="checkout-review_products_table_promotion-input" placeholder=" Código de Promoción"/>
                                <div className="checkout-review_products_table_promotion__icon"/>
                        </div>
                        <div className="checkout-review_products_table__buy">
                            <div className="checkout-review_products_table__bu__total"><div className="checkout-review_products_table__bu__total__title">Total:</div>
                            <div className="checkout-review_products_table__bu__total__numb">S/{this.state.total}.00</div></div>
                            <div className="checkout-review_products_table__bu__comprar" onClick={()=> this.props.history.push('/checkout-info')} ><a>Procesar Compra</a></div>
                        </div>
                       
                    </div>
                </div>
                <div>
                    
                </div>
      		</div>
    	);
  	}
}
export default withRouter(CheckoutReviewProducts);