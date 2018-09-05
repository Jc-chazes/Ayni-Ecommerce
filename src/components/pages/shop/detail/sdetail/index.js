import React, { Component } from 'react';
import './index.css';

import SMMain from '../../../../mini_containers/sm-main/'
import DetCustomizer from './customizer/';

class SDetail extends Component{
    constructor(){
        super()
        this.state={
            bckPreview: null
        }
        this.smMainDetail=['Home','Colecciones','Shop']
    }
    updatePreview(image){
        this.setState({bckPreview: image })
    }

    componentDidMount(){
        this.setState({bckPreview: this.props.proData[0].image[0] })
    }
    render(){
        
        return(  
            <div className="shop-detail-detail">
                <div className="shop-detail-detail__go-back"><button>VOLVER A SHOP</button></div>
                <div className="shop-detail-detail__image">
                    <div className="shop-detail-detail__image__list">
                        <div className="shop-detail-detail__image__list__sm-main">
                            <SMMain main={this.smMainDetail} />
                        </div>
                        <div className="shop-detail-detail__image__list__content">
                            {this.props.proData[0].image.map((data, index)=>{                                
                                return(
                                    <div className="shop-detail-detail__image__list__content__data" key={index}>
                                        <div className={this.state.bckPreview===data?'shop-detail-detail__image__list__content__data__img-selected':
                                        'shop-detail-detail__image__list__content__data__img'} 
                                    style={{backgroundImage:'url('+data+')'}} onClick={()=>this.updatePreview(data)}/>
                                    </div>  
                                )
                            })} 
                        </div>
                    </div>
                    <div className="shop-detail-detail__image__preview">
                        <div className="shop-detail-detail__image__preview__data" style={{backgroundImage:'url('+this.state.bckPreview+')'}} />
                    </div>
                </div>
                <div className="shop-detail-detail__detail">
                    <DetCustomizer />
                </div>
            </div>
        )
    }
}

export default SDetail;