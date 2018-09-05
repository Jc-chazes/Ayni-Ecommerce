import React, { Component } from 'react';
import './index.css';

class ContainerAddToPurchase extends Component{
    alerta(){
        alert("Todo OK")
    }
    render(){
        return(
            <div className="container-add-to-purchase">
                <div className="container-add-to-purchase__content">
                    <div className="container-add-to-purchase__text">No hay compras registradas</div>
                    <button>AGREGAR A COMPRAS</button>
                </div>
            </div>
        )
    }
}

export default ContainerAddToPurchase;