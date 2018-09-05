import React, { Component } from 'react';
import './index.css';

//import HomeCollectionsImagesMobile from './mobile/';
import HomeCollectionsImagesMobile from './images-mobile/';

class HomeCollections extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="home-collections">
                <div className="home-collections__text">
                    <div className="home-collections__text__up">Lo más reciente</div>
                    <div className="home-collections__text__down">COLECCION SS 18'</div>
                </div>
                <div className="home-collections__images">
                    <div className="home-collections__images__content" style={{backgroundImage: 'url('+this.props.collectionsData[0]+')'}} ></div>
                    <div className="home-collections__images__content-about" >
                        <div className="home-collections__images__content-about__title">
                            <hr/>
                            <div className="home-collections__images__content-about__title__text">SUMMER<br/>IS CALLING</div>
                            <hr/>
                        </div>
                        <div className="home-collections__images__content-about__body">
                            <p>Lorem ipsum dolor sit amet consectetuer adipscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
                            <p>Ut wisi enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis nisl ut aliquip ex wa commodo consequat</p>
                        </div>
                        <div className="home-collections__images__content-about__see-more">
                            <div className="home-collections__images__content-about__see-more__icon"/>VER MÁS
                        </div>
                    </div>
                    <div className="home-collections__images__content" style={{backgroundImage: 'url('+this.props.collectionsData[1]+')'}} ></div>
                    <div className="home-collections__images__content" style={{backgroundImage: 'url('+this.props.collectionsData[2]+')'}} ></div>
                    <div className="home-collections__images__content" style={{backgroundImage: 'url('+this.props.collectionsData[3]+')'}} ></div>
                    <div className="home-collections__images__content" style={{backgroundImage: 'url('+this.props.collectionsData[4]+')'}} ></div>
                </div>
                {<HomeCollectionsImagesMobile collData={this.props.collectionsData}/>}
            </div>
        )
    }
}

export default HomeCollections;