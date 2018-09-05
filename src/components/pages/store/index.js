import React, {Component} from 'react';
import './index.css';
// Lista de tiendas
import FindUsOnlineStores from "./left_list_stores/online_store/";
import FindUsStores from "./left_list_stores/physical_store/";
// Mapa de la tienda
import FindUsOnlineMap from "./right_content_store/online_store/";
import FindUsMap from "./right_content_store/physical_store/";
// Google maps
import {GoogleApiWrapper} from "google-maps-react";

class OptionPanel extends Component {
    constructor(props) {
        super(props);

        // Methods
        this.selectOption = this.selectOption.bind(this);
        this.seeInMap = this.seeInMap.bind(this);
        // State and Json Results Demo
        this.state = {
            id_activo: 0,
            classshowSheddule: '',
            lat: -12.107871,
            long: -77.025266,
            zoom: 12,
        };
        this.options = [
            {
                tittle: "TIENDA ONLINE",
            },
            {
                tittle: "TIENDA EN LIMA, PERÚ",
            }
        ];
        this.stores = [
            {
                name: 'Lima Bonita',
                adress: 'Av. Santa Cruz 814 - Miraflores',
                reference: '(2do piso de Cineplanet Alcazar)',
                shedule: 'Lunes a Sábados de 10:00 - 21:30 Domingos 12:00 - 20;00',
                location: {
                    lat: -12.110169,
                    lng: -77.037606
                }
            },
            {
                name: 'Vernácula San Isidro',
                adress: 'Av. Conquistadores 635 - San Isidro',
                reference: '',
                shedule: '',
                location: {
                    lat: -12.101966,
                    lng: -77.036719
                }
            },
            {
                name: 'Vernácula Barranco',
                adress: 'Calle Ayacucho 269 - Barranco',
                reference: '',
                shedule: '',
                location: {
                    lat: -12.149533,
                    lng: -77.022395
                }
            },
            {
                name: 'Vernácula Jockey Plaza',
                adress: 'CC Jockey Plaza 2do nivel en Av. Javier Prado Este 4200 - Surco',
                reference: '',
                shedule: '',
                location: {
                    lat: -12.085548,
                    lng: -76.977385
                }
            },
            {
                name: 'Rebel Soul',
                adress: 'Calle Miguel Dasso 126 2do piso - San Isidro',
                reference: '',
                shedule: '',
                location: {
                    lat: -12.106176,
                    lng: -77.040610
                }
            },
            {
                name: 'Aurea Concept Store',
                adress: 'Av. Primavera 517 - Surco',
                reference: '',
                shedule: '',
                location: {
                    lat: -12.110312,
                    lng: -76.988022
                }
            },
            {
                name: 'Bona',
                adress: 'CC La Rotonda en Av. La Fontana 440 - La Molina',
                reference: '',
                shedule: '',
                location: {
                    lat: -12.073225,
                    lng: -76.954731
                }
            },
            {
                name: 'Da One',
                adress: 'Av. Chirichigno Mz. C Lt. 10M Condominio Valle Blanco - Urb. San Eduardo - Piura',
                reference: '',
                shedule: '',
                location: {
                    lat: 40.7143033,
                    lng: -74.0036919
                }
            }
        ]

    }

    selectOption(index) {
        this.setState({
            id_activo: index
        })
        console.log('entro', index);
    }

    seeInMap(index) {
        this.setState({
            lat: this.stores[index].location.lat,
            long: this.stores[index].location.lng,
            zoom: 16
        })

    }

    render() {
        const option_left_lateral = () => {
            switch (this.state.id_activo) {
                case 0:
                    return (
                        <FindUsOnlineStores seeInMap={this.seeInMap} stores={this.stores}/>
                    );
                    break;
                case 1:
                    return (
                        <FindUsStores seeInMap={this.seeInMap} stores={this.stores}/>
                    );
                    break;
            }
        };
        const content_right_lateral = () => {
            switch (this.state.id_activo) {
                case 0:
                    return (
                        <FindUsOnlineMap stores={this.stores} lat={this.state.lat} long={this.state.long}
                                         google={this.props.google} zoom={this.state.zoom}/>
                    );
                    break;
                case 1:
                    return (
                        <FindUsMap stores={this.stores} lat={this.state.lat} long={this.state.long}
                                   google={this.props.google} zoom={this.state.zoom}/>
                    );
                    break;
            }
        };
        return (
            <div className="wraper">
                <div className="findus">
                    {/* -- Inicio Menu Lateral en Desktop-- */}
                    <div className="findus_stores_maps-container_header_labels">
                        <div className="findus_stores_maps-container_header_labels_title">
                            <p className="findus_stores_maps-container_header_labels_loc">Stores</p>
                        </div>
                        <p className="findus_stores_maps-container_header_labels_store">& SHOWROOMS</p>
                        <hr className="findus_stores-tittle-line"/>
                        <div style={{paddingTop:'2%'}}>
                        {
                            this.options.map((val, index) =>
                                <div key={index} className={"findus_stores_option-1 " +
                                (this.state.id_activo == index ? "store__panel-lateral__option--selected" : "")}
                                     onClick={() => this.selectOption(index)}>
                                    {val.tittle}
                                </div>
                            )
                        }
                        </div>

                        {/* -- Inicio Menu Lateral en Mobile-- */}
                        <div className="store_panel-lateral-mobile">
                            <div style={{
                                overflow: "hidden",
                                width: "260px",
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center"
                            }}>
                                {
                                    this.options.map((val, index) =>
                                        <div key={index} className={"store_panel-lateral_option-mobile " +
                                        (this.state.id_activo == index ? "store__panel-lateral__option--selected" : "")}
                                             onClick={() => this.selectOption(index)}>
                                            {val.tittle}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        {/* -- Fin Menu Lateral en Mobile-- */}

                    </div>

                    {
                        option_left_lateral()
                    }
                </div>
                {
                    content_right_lateral()
                }

            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDytgdQpZFXlzTx2_JWIBJtDQdkEAiMzMc',
})(OptionPanel);
