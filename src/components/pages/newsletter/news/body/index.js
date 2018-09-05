import React, { Component } from 'react';
import './index.css';

class NewsletterBody extends Component{
    render(){
        var sizeArray = this.props.datacol1.length
        const hideBorderBottom = { borderBottom: 'none' }
        const contentCol = this.props.datacol1.map((data, index)=>{
                            const dataContent = 
                                <div className="newsletter-body__container__content" key={index} style={index===sizeArray-1?hideBorderBottom:null}>
                                    <img src={data.image} width={100} />
                                    <div className="newsletter-body__container__content__category">{data.category}</div>
                                    <div className="newsletter-body__container__content__title">{data.name}</div>
                                    <div className="newsletter-body__container__content__description">{data.description}</div>
                                    <div className="newsletter-body__container__content__date">{data.date}</div>
                                </div>
                            return( dataContent )
                        })              
        return(
            <div className="newsletter-body">
                <div className="newsletter-body__container">
                        {contentCol}  
                </div>   
            </div>
        )
    }
}

export default NewsletterBody;