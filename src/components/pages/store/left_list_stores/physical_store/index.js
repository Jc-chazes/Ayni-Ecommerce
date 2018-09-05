import React, { Component } from 'react';
import '../index.css'

class FindUsStores extends Component {
    constructor(props){
        super(props)
        this.state={
            arrayId: [],
            id_activo:0
        }

    }

    checkStoreId(index){
        if (this.state.arrayId.indexOf(index) === -1) {
            var arrayId = this.state.arrayId; 
            arrayId.push(index);
            this.setState({arrayId})
        }else{
            var arrayId = this.state.arrayId; 
            arrayId.splice(index, 1);
            this.setState({arrayId})
        }
    }

    get_class(index){
        if (this.state.arrayId.indexOf(index) === -1) {
            return '';
        }
        return 'left_list_stores_shedule-div_show'
    }

    selectStore(index){
        this.setState({
            id_activo:index
        })
        this.props.seeInMap(index)
        if (window.innerWidth < 700 ){
            window.scrollTo(0,700);
        }
        
    }
    
	render() {
		return (
            <div className='left_list_store'>
                    <div className="left_list_stores">
                            {
                                this.props.stores.map((val, index)=>
                                    <div key={index} className={ "left_list_stores_store " + (this.state.id_activo==index?"left_list_stores_store_selected":"") } onClick={ ()=>this.selectStore(index) }>
                                        <p className="left_list_stores_store_name">{val.name}</p>
                                        <p className="left_list_stores_store_address">{val.adress} {val.reference}</p>
                                        <div className={ "left_list_stores_shedule-div " + this.get_class(index) }>
                                            <p className="left_list_stores_store_shedule">{val.shedule}</p>
                                        </div> 
                                        <div style={{display:'flex', justifyContent:'space-between'}}>
                                            <p className="left_list_stores_store_name_sheddule-map" onClick={ ()=>this.checkStoreId(index) }>
                                            { this.get_class(index)==''? '+ Ver horarios':'- Ver menos' }
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                    </div> 
            </div>
			
    	);
  	}
}

export default FindUsStores;