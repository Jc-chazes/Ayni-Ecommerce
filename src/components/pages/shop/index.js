import React, { Component } from 'react';

import ShopCatalog from './catalog/';
import ShopDetail from './detail/';

class Shop extends Component{
    render(){
        return(
            <div className="shop">
                {<ShopCatalog  />}
                {/*<ShopDetail />*/}
            </div>
        )
    }
}

export default Shop;