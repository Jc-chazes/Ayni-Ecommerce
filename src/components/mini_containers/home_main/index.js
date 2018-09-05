import React, { Component } from 'react';
import './index.css';

class ContainerHomeMain extends Component{
    render(){
        return(
            <div className="container-home-main">
                <div className="container-home-main__content1">
                    <div className="container-home-main__content1__see-all">
                        <div className="container-home-main__content1__see-all__icon" />
                        <div className="container-home-main__content1__see-all__text">Ver todo</div>
                    </div>
                </div>
                <div className="container-home-main__content2">
                    {this.props.homeMain.map((val, ind)=>
                        <div key={ind} className="container-home-main__content2__data">{val}</div>
                    )}
                </div>
            </div>
        )
    }
}

export default ContainerHomeMain;