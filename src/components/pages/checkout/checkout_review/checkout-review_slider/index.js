import React, { Component } from 'react';
import './index.css'

class CheckoutReviewSliderProduct extends Component {
    constructor(props){
        super(props)
        this.moveSliderLeft=this.moveSliderLeft.bind(this)
        this.moveSliderRight=this.moveSliderRight.bind(this)
        this.state={
            x:0,
            n:0,
        }
        this.product_ranked = this.props.outfit
        this.width_ranked_products= this.props.width_container*this.product_ranked.length + (this.product_ranked.length-1)*30;
    }

    moveSliderLeft(){
        this.setState({x:this.state.x -= this.props.width_container + 30,n:this.state.n += 1})
    }
    moveSliderRight(){
        this.setState({x:this.state.x += this.props.width_container + 30,n:this.state.n -= 1})
    }
    
	render() {
        switch(this.state.n){
            case 0 :

        }
        if(this.state.n >=0 && this.state.n < this.product_ranked.length){
            var moveImg = {
                WebkitTransition : " 1s all",
                transform:'translateX('+this.state.x+'px)',
                width :this.width_ranked_products,
            }
        }
        if(this.state.n === this.product_ranked.length-1) {
            var enableLeft = true
            var btn_ranked_left_={opacity:.3}
        }
        if(this.state.n ===0){
            var enableRight=true
            var btn_ranked_right = {opacity:.3}
        }else{
            var btn_ranked_right = {display:1}
        }
        var urlImage=this.props.url
		return (
			<div className="checkout-review-slider-product">
                <div className="checkout-review-slider-product_title">AGREGA MÁS PRENDAS A TU COMPRA</div>
                <div className='checkout-review-slider-product__container' style={{display: 'flex', height:'100%'}}>
                    <div className="checkout-review-slider_container_left">
                        <input type="button" style={btn_ranked_left_} className="checkout-review-slider_container_left-button" name="move-left" disabled={enableLeft} onClick={this.moveSliderLeft}/>
                    </div>
                    <div className="checkout-review-slider_container">
                            <div className="checkout-review-slider_container_content" style={moveImg}>
                                {
                                    this.product_ranked.map((val, index)=>
                                        <div key={index}>
                                            <div key={index} style={
                                                {
                                                    width:this.props.width_container,
                                                    height:this.props.height_container,
                                                    backgroundImage: 'url(' +val.image+ ')',
                                                    backgroundPosition: "center",
                                                    backgroundSize:'contain',
                                                    backgroundRepeat: "no-repeat",
                                                }
                                            } />
                                            <div className="checkout-review-slider_container_content_detail">
                                                <p  className="checkout-review-slider_container_content_detail__name">{ val.name }</p>
                                                <p className="checkout-review-slider_container_content_detail__name__price"> S/ { val.price }</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                    </div>
                    <div className="checkout-review-slider_container_right">
                            <input type="button" style={btn_ranked_right} className="checkout-review-slider_container_right-button" name="move-right" disabled={enableRight} onClick={this.moveSliderRight}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckoutReviewSliderProduct;