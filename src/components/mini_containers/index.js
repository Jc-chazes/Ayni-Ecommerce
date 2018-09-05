import React, { Component } from 'react';

import ContainerHomeMain from './home_main';
import ContainerAddToPurchase from './add_to_purchase';

class Containers extends Component{
    constructor(){
        super()
        this.homeMain=['Saco', 'Jacket', 'Blusa', 'Polo', 'Top', 'Bividi', 'Vestido', 'Overall', 
        'Pantalón', 'Legging', 'Jeans', 'Falda', 'Short', 'Kimono', 'Body', 'Conjuntos', 'Chabuscas'];
    }
    render(){
        return(
            <div className="containers">
                {/* <ContainerHomeMain homeMain={this.homeMain} /> */}
                {<ContainerAddToPurchase />}
            </div>
        )
    }
}

export default Containers;