import React, { Component } from 'react';
import CheckoutReviewProducts from './checkout-review_products/index';
import CheckoutReviewSliderProduct from './checkout-review_slider'
import './index.css';
import Carousel from './slider/index';


class CheckoutReview extends Component {
    constructor(props){
        super(props)
        this.update=this.update.bind(this)
        this. update_count=this. update_count.bind(this);
        this.mount_total=0;
        this.states={
            products_selected : [
                {
                    image: "http://localhost:3000/Images/arrival3.png",
                    name: "Floral Off-the-Shoulder Romper",
                    description:"Top",
                    size: "Small",
                    color: "Rojo",
                    price: 69.00,
                    cant:1,
                    tot:69,

                },
                {
                    image: "http://localhost:3000/Images/Image51.png",
                    name: "PaperbagXX",
                    description:"Pantalón",
                    size: "Small",
                    color: "Rojo",
                    price: 69.00 ,
                    cant:1,
                    tot:69,

                },
                {
                    image: "http://localhost:3000/Images/Image51.png",
                    name: "Paperbag Chino Pants",
                    description:"Falda",
                    size: "Small",
                    color: "Rojo",
                    price: 69.00,
                    cant:1,
                    tot:69,

                },
                {
                    image: "http://localhost:3000/Images/Image51.png",
                    name: "Paperbag Chino Pants",
                    description:"Falda",
                    size: "Small",
                    color: "Rojo",
                    price: 69.00,
                    cant:1,
                    tot:69,

                },
                {
                    image: "http://localhost:3000/Images/Image51.png",
                    name: "Paperbag Chino Pants",
                    description:"Falda",
                    size: "Small",
                    color: "Rojo",
                    price: 69.00,
                    cant:1,
                    tot:69,

                }
            ]}

        this.outfit= [
            {
                name: 'Floral Off-the-Shoulder Romper',
                image: 'http://localhost:3000//Images//image49.png',
                price: '69.00',
            },
            {
                name: 'Striped Flounce Jumpsuit',
                image: 'http://localhost:3000/Images/image40.png',
                price: '69.00',
            },
            {
                name: 'Striped Flounce Jumpsuit',
                image: 'http://localhost:3000/Images/image41.png',
                price: '69.00',
            },
            {
                name: 'Producto',
                image: 'http://localhost:3000/Images/image49.png',
                price: '69.00',
            },
            {
                name: 'Producto',
                image: 'http://localhost:3000/Images/image40.png',
                price: '69.00',
            },
        ]
    }
    update(e){
        this.setState({products_selected:e})
    }
    update_count(e,id){
        this.setState( (state) => {
            state.products_selected[id].cant = e
            
        });
    }
	render() {

        var total_product  = this.props.states.map((val,index)=> {
            this.mount_total= val.price*val.cant + this.mount_total

        });
		return (
			<div className="checkout-review">
                <CheckoutReviewProducts mount_total={this.mount_total} products_selected={this.props.states} update={this.update} update_count={this.update_count}/>
                <div className='carousel-checkout'>
                    <Carousel/>
                </div>
                <CheckoutReviewSliderProduct outfit = {this.outfit}  width_container={348} height_container={420}/>
                <div className="checkout-review_content_back" onClick={()=> this.props.history.push('/shop')}>
                    <div className="checkout-review_content_back_button"  />
                    Volver a SHOP
                </div>
      		</div>
    	);
  	}
}

export default CheckoutReview;