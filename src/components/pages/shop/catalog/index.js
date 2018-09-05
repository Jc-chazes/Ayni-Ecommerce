import React, { Component } from 'react';
import './index.css';

//import SMMain from './panels/sm-main/';
import SMMain from '../../../mini_containers/sm-main/'
import OrderBy from './panels/order-by/';
import Categories from './panels/categories/';
import RangePrice from './panels/slider-price/';
import Colors from './panels/colors/';
import Sizes from './panels/sizes/';

import MobileFilter from './mobile-filter/';
import Footer from '../../../fixed/footer';
import Header from '../../../fixed/header';

class ShopCatalog extends Component{
    constructor(){
        super()
        this.state={
            colorsUP: false,
            sizesUP: false,
        }
        this.smallOptions=['Home','Shop','Todo']
        this.orderByOptions=['Descuentos','Novedades','Popularidad','Precio Ascendente','Precio Descendente']
        this.categoryOptions=['Todo','Saco','Jacket','Blusa','Polo','Top','Bividi','Vestido','Overall','Pantalón','Legging','Jeans','Falda','Short','Kimono','Body','Conjuntos']
        this.colorOptions=['Azul','Blanco','Celeste','Gris','Guinda','Verde','Rosa','Dorado','Perla','Cobalto','Ocre','Marron','Mostaza','Morado']
        this.sizeOptions=['Todas las tallas','36','37','38','39','40','41','Talla única','XS','XS-S','S','M','M-L','L','XL']
        this.shopData=[
            {image: 'http://localhost:3000/images/resources/image4.jpg', name: 'Floral Off-Shoulder Romper', price: '199.00'},
            {image: 'http://localhost:3000/images/resources/image4.jpg', name: 'Floral Off-Shoulder Romper', price: '199.00'},
            {image: 'http://localhost:3000/images/resources/image4.jpg', name: 'Floral Off-Shoulder Romper', price: '199.00'},
            {image: 'http://localhost:3000/images/resources/image4.jpg', name: 'Floral Off-Shoulder Romper', price: '199.00'},
            {image: 'http://localhost:3000/images/resources/image4.jpg', name: 'Floral Off-Shoulder Romper', price: '199.00'},
            {image: 'http://localhost:3000/images/resources/image4.jpg', name: 'Floral Off-Shoulder Romper', price: '199.00'},
            {image: 'http://localhost:3000/images/resources/image4.jpg', name: 'Floral Off-Shoulder Romper', price: '199.00'},
            {image: 'http://localhost:3000/images/resources/image4.jpg', name: 'Floral Off-Shoulder Romper', price: '199.00'},
            {image: 'http://localhost:3000/images/resources/image4.jpg', name: 'Floral Off-Shoulder Romper', price: '199.00'},
        ]
    }

    /* Deploy only for Desktop */
    deploy(to){
        switch(to){
            case 1:
                this.setState({ colorsUP: !this.state.colorsUP })
                break;
            case 2:
                this.setState({ sizesUP: !this.state.sizesUP })
                break;
            default:
                break;
        }
    }

    render(){
        const plusButton = { backgroundImage: 'url("http://localhost:3000/icons/plus.png")'}
        const minusButton = { backgroundImage: 'url("http://localhost:3000/icons/minus.png")'}

        return(
            <div className="shop-catalog" >

                <div className="shop-catalog__general-container">  {/* Maximum container son */}
                    {/* Left container - Desktop */}
                    <div className="shop-catalog__left">
                        <div className="shop-catalog__left__container">
                            <div className="shop-catalog__left__container__sm-main">
                                <SMMain main={this.smallOptions}/>
                            </div>
                            <div className="shop-catalog__left__container__categories">
                                <div className="shop-catalog__left__container__categories__label">CATEGORÍAS</div>
                                <Categories categories={this.categoryOptions} />
                            </div>
                            <div className="shop-catalog__left__container__filter-by">
                                <div className="shop-catalog__left__container__filter-by__label">FILTRADO POR:</div>
                                <RangePrice />
                            </div>
                            <div className="shop-catalog__left__container__colors">
                                <div className="shop-catalog__left__container__colors__label">
                                    COLORES
                                    <button onClick={()=>this.deploy(1)} style={this.state.colorsUP===true?minusButton:plusButton}/>
                                </div>
                                {/* Color container */}
                                {this.state.colorsUP===true?<Colors colors={this.colorOptions} />:null}
                            </div>
                            <div className="shop-catalog__left__container__sizes">
                                <div className="shop-catalog__left__container__sizes__label">
                                    TALLA
                                    <button onClick={()=>this.deploy(2)} style={this.state.sizesUP===true?minusButton:plusButton}/>
                                </div>
                                {/* Talla container */}
                                {this.state.sizesUP===true?<Sizes sizes={this.sizeOptions} />:null}
                            </div>
                        </div>
                    </div>
                    {/* Mobile Version only */}
                    <MobileFilter />
                    {/* Right container - Desktop/Mobile */}
                    <div className="shop-catalog__right">
                        <div className="shop-catalog__right__orderby">
                            <OrderBy options={this.orderByOptions} />
                        </div>
                        <div className="shop-catalog__right__images">
                            {/* Contenedor de imagenes */}
                            {this.shopData.map((data,index)=>{
                                return(
                                    <div className="shop-catalog__right__images__content" key={index}>
                                        <div className="shop-catalog__right__images__content__pic" style={{backgroundImage:'url('+data.image+')'}} />
                                        <div className="shop-catalog__right__images__content__text">
                                            <div className="shop-catalog__right__images__content__text__name">{data.name}</div>
                                            <div className="shop-catalog__right__images__content__text__price">S/ {data.price}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
              
            </div>
        )
    }
}

export default ShopCatalog;
