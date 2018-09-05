import React ,{Component} from 'react';
import './index.css';
import ComponentRanked from './component-ranked/index';

class NewArrivals extends Component{
    constructor(props){
        super(props)
        this.moveSliderLeft=this.moveSliderLeft.bind(this)
        this.moveSliderRight=this.moveSliderRight.bind(this)
        this.state={
            x:0,
            n:0,
        }
        this.width_ranked_products= this.props.width_container*this.props.product_ranked.length + (this.props.product_ranked.length-1)*30;
    }
    moveSliderLeft(){
        this.setState({x:this.state.x -= this.props.width_container + 30,n:this.state.n += 1})
    }
    moveSliderRight(){
        this.setState({x:this.state.x += this.props.width_container + 30,n:this.state.n -= 1})
    }
    render(){
        if(this.state.n >=0 && this.state.n < this.props.product_ranked.length){
            var moveImg = {
                WebkitTransition : " 0.6s all",
                transform:'translateX('+this.state.x+'px) ',
                width :this.width_ranked_products,
            }
        }
        if(this.state.n === this.props.product_ranked.length-1) {
            var enableLeft = true
            var btn_ranked_left_={opacity:.3}
        }
        if(this.state.n ===0){
            var enableRight=true
            var btn_ranked_right = {opacity:.3}
        }else{
            var btn_ranked_right = {display:1}
        }
        return(
          <div className="new-arrivals-sale">
            <div className="new-arrivals-sale__header">
              <div style={{
                width:196,
                height:150,
                backgroundImage:'url("http://localhost:3000/Icons/Group%209425.png")',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                backgroundSize:'contain',
              }}/>
            </div>
            <div className="new-arrivals-sale__product">
              {/*<div><input type="button" style={btn_ranked_right} className="new-arrivals-sale__buttons__btn-right" name="move-right" disabled={enableRight} onClick={this.moveSliderRight}/></div>*/}
              <button>PREV</button>
              <div style={{
                width:1120,
                height:524,
                position:'relative',
                overflow: 'hidden',
              }}>
                <div className="new-arrivals-sale__product__items"  style={moveImg}>
                  <ComponentRanked data_ranked={this.props.product_ranked} width_container={this.props.width_container} height_container={this.props.height_container}/>
                </div>
              </div>
              <button>NEXT</button>
             {/*<div><input type="button" style={btn_ranked_left_} className="new-arrivals-sale__buttons__btn-left" name="move-left" disabled={enableLeft} onClick={this.moveSliderLeft}/></div>*/}
             </div>
          </div>
        );
    }
}
export default NewArrivals;