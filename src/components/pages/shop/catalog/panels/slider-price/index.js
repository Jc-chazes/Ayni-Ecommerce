import React, { Component } from 'react';
import './index.css';

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class PriceSlider extends Component{
    constructor(){
        super()
        this.state={
            min:40,
			max:100
        }
    }
    onChange(e){
		this.setState({min:e})
	}
    render(){
        const styles = {
            railStyle: {
                backgroundColor: '#393939', border: '1px white solid'
            },
            handleStyle: [
                {backgroundColor: 'white', border: '1px solid #393939'},
                {backgroundColor: 'white', border: '1px solid #C6BCB3'},
            ],
            trackStyle: [
                {backgroundColor: 'black', border: '1px solid white'},
            ]
        }
        return(
            <div className="price-slider">
                <div className="price-slider__text">S/{this.state.min}</div>
                <div className="price-slider__slider">
                    <Slider defaultValue={[55]} trackStyle={styles.trackStyle} handleStyle={styles.handleStyle} railStyle={styles.railStyle} min={40} max={100} onChange={(e)=>this.onChange(e)} />
                </div>
                <div className="price-slider__text">S/ {this.state.max}</div>
            </div>
        )
    }
}

export default PriceSlider;