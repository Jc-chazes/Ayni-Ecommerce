import React, { Component } from 'react';

import OurInfo from './info/';
import OurDetail from './detail/';

class OurUniverse extends Component{
    render(){
        return(
            <div className="our-universe">
                {<OurInfo />}
                {/*<OurDetail />*/}
            </div>
        )
    }
}

export default OurUniverse;