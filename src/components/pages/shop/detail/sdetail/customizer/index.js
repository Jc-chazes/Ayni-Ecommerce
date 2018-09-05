import React, { Component } from 'react';
import './index.css';

class DetailCustomizer extends Component{
    constructor(){
        super()
        this.state={
            count: 1
        }
        this.selectOption=[
            {
                size:['SMALL','MEDIUM','LARGE'],
                color: ['ROJO','VERDE','AZUL']
            }
        ]
        this.selection=['Material e instrucciones de lavado','Tiempo y costo de envío','Tiempo y costo de envío']
    }
    updateCounter(action){
        if(action==='sum')
            this.setState({ count: this.state.count+1 })
        else
            if(this.state.count!=1)
                this.setState({ count: this.state.count-1 })
    }
    shareFB(){
        window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse", "miVentana", "width=600, height=400, top=85, left=50", true);
    }
    render(){
        return(
            <div className="detail-customizer">
                 <div className="detail-customizer__text1">
                    <div className="detail-customizer__text1__name">Floral Off-the-Shoulder Romper</div>
                    <div className="detail-customizer__text1__price">S/ 199.00</div>
                 </div>
                 <div className="detail-customizer__text2">
                    <div className="detail-customizer__text2__title">DESCRIPCIÓN</div>
                    <div className="detail-customizer__text2__body">
                        Vestido de lana de alpaca peruana para una tarde de otoño perfecto, creado por la marca AYNI.</div>
                 </div>
                 <div className="detail-customizer__choose">
                    <div className="detail-customizer__choose__left">
                        <label>Elige tu talla:</label>
                        <select>
                            {this.selectOption[0].size.map((val, ind)=>{
                                return(
                                    <option key={ind}>{val}</option>
                                )
                            })} 
                        </select>
                        <div className="detail-customizer__choose__left__guia">Guía de talla</div>
                    </div>
                    <div className="detail-customizer__choose__right">
                        <label>Color:</label>
                        <select>
                        {this.selectOption[0].color.map((val, ind)=>{
                                return(
                                    <option key={ind}>{val}</option>
                                )
                            })} 
                        </select>
                    </div>
                 </div>
                 <div className="detail-customizer__quantity">
                    <div className="detail-customizer__quantity__counter">
                        <button className="minus" onClick={()=>this.updateCounter('res')}/>
                            {this.state.count}
                        <button className="plus" onClick={()=>this.updateCounter('sum')}/>
                    </div>
                    <button className="detail-customizer__quantity__start-to-buy">EMPEZAR LA COMPRA</button>
                 </div>
                 <div className="detail-customizer__selection">
                    {this.selection.map((text, index)=>{
                        return(
                            <div className="detail-customizer__selection__content" key={index}>
                                <div className="detail-customizer__selection__content__text">{text}</div>
                                <div className="detail-customizer__selection__content__icon"/>
                            </div>
                        )
                    })}
                 </div>
                 <div className="detail-customizer__share">
                    <div className="detail-customizer__share__text">Compartir en :</div>
                    <div className="detail-customizer__share__icon">
                        <div className="detail-customizer__share__icon__fb" onClick={this.shareFB} />
                        <div className="detail-customizer__share__icon__insta"/>
                    </div>
                 </div>
            </div>
        )
    }
}

export default DetailCustomizer;