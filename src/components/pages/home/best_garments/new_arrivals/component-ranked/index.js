import React ,{Component} from 'react';
import './index.css';

class ComponentRanked extends Component{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(nextProps,nextState){
        return false;
    }
    render(){
        var card_arrivals = this.props.data_ranked.map((val, index)=>
            <div className="card_arrivals">
                <div key={index} style={
                    {
                        width: this.props.width_container,
                        height: this.props.height_container,
                        backgroundImage: 'url(' + val.image + ')',
                        backgroundPosition: "center",
                        backgroundSize:'contain',
                        backgroundRepeat: "no-repeat",
                        backgroundColor:'#FAF8F7'
                    }
                }/>
                <div className="card_arrivals_name">{val.name}</div>
                <div className="card_arrivals_price">{val.price}</div>
            </div>
        );
        return(card_arrivals);
    }
}
export default ComponentRanked;
