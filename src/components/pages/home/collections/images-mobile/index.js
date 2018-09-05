import React, { Component } from 'react';
import './index.css';

class HomeCollectionsMobileImages extends Component{
    constructor(){
        super()
        this.state={
            i: 0
        }
        this.backImg=this.backImg.bind(this)
        this.nextImg=this.nextImg.bind(this)
    }

    nextImg(){
        if(this.state.i === this.props.collData.length-1){
            this.setState({ i: 0 })
        }else{
            this.setState({ i: this.state.i+1 })
        }
    }
    backImg(){
        if(this.state.i === 0){
            this.setState({ i: this.props.collData.length-1 })
        }else{
            this.setState({ i: this.state.i-1 })
        }
    }

    render(){
        var data = this.props.collData;
        var id = this.state.i;
        //var elementoTouch= document.getElementById("home-collections-mobile-images__content");
        
        
        return(
            <div className="home-collections-mobile-images">
                <button className="home-collections-mobile-images__btn-left" onClick={this.backImg}/>
                <div className="home-collections-mobile-images__content" style={{backgroundImage: 'url('+data[id]+')'}}/>
                <button className="home-collections-mobile-images__btn-right" onClick={this.nextImg}/>
            </div>
        )
    }
}

export default HomeCollectionsMobileImages;