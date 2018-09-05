import React, { Component } from 'react';
//import './index.css'

import ReactDOM from 'react-dom'

class CheckoutUtilsMap extends Component {
    
    componentDidMount() {
        this.loadMap();
    }
    componentDidUpdate(){
        this.loadMap();
    }

    loadMap() {
        const {google} = this.props;
        if (this.props && this.props.google) {
            
        const maps = google.maps;
        var geocoder = new google.maps.Geocoder();

    
        const mapRef = this.refs.map;
        const node = ReactDOM.findDOMNode(mapRef);

        const mapConfig = Object.assign({}, {
        zoom: 16,
        mapTypeId: 'roadmap',
        icon: 'http://localhost:3000/Icons/place.png',
        libraries: 'places'
        })

        var map = new maps.Map(node, mapConfig); 
        
        geocoder.geocode( { 'address': this.props.address}, function(results, status) {
        if (status === 'OK') {
            
            map.setCenter(results[0].geometry.location);
            //var marker = new google.maps.Marker({
            new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
        });
      
    
        }
    }

	render() {
        return (
			<div className="checkout-map_container" style={{display: 'flex', width: this.props.widthContainer+"%"}}>
            	<div style={{width:"100%", height:"100%"}} ref="map" />
      		</div>
    	);
  	}
}

export default CheckoutUtilsMap;