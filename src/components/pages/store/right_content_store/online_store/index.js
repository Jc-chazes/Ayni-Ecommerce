import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import '../index.css'


class FindUsOnlineMap extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.loadMap();
    }

    componentDidUpdate() {
        this.loadMap();
    }

    loadMap() {
        const {google} = this.props;
        if (this.props && this.props.google) {

            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            const mapConfig = Object.assign({}, {
                center: {lat: this.props.lat, lng: this.props.long},
                zoom: this.props.zoom,
                mapTypeId: 'roadmap',
                icon: 'http://localhost:3000/Icons/place.png'

            })

            this.map = new maps.Map(node, mapConfig);

        }

        this.props.stores.forEach(location => {
            const marker = new google.maps.Marker({
                position: {lat: location.location.lat, lng: location.location.lng},
                map: this.map,
                title: location.name
            });
        })
    }

    render() {
        return (
            <div className="right_content_store_maps-container">
                {/* <div className="findus_stores_maps-container_header">
                    <div className="findus_stores_maps-container_header_search">
                    <input type="text" placeholder="Ingresa la dirección o localidad"/>
                </div>
                </div>*/}

                <div className="right_content_store_maps-container_map" ref="map"/>
            </div>
        );
    }
}

export default FindUsOnlineMap;