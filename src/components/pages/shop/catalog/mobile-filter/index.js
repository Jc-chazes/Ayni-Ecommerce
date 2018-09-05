import React, { Component } from 'react';
import './index.css';

import SM from '../../../../mini_containers/sm-main/';
import OptionAllGarments from './all-garments/';
import DarkOption from './dark-component/';
import MobileFilterBy from './filter-by/';

import MBHeader from '../../../../fixed/header/';

class ShopMobileFilter extends Component{
    constructor(){
        super()
        this.state={
            deployGarments: false,
            deployOrderBy: false,
            deployModelView: false
        }
        /* MAIN OPTIONS */
        this.smMainContent=['Home','Shop']
        this.allGarmentsOption=['Conjuntos completos','Prendas individuales','Prendas de VERANO 18','Prendas de OTOÑO 17','Todas las prendas']
        this.orderByOption=['Descuentos','Novedades','Popularidad','Precio ascendiente','Pecio descendiente']
        this.modelOption=['MODELO','PRENDA']

        /* Functions */
        this.deployMobiFilter=this.deployMobiFilter.bind(this)
    }
    deployMobiFilter(to){
        switch(to){
            case 1:
                this.setState({ deployGarments: !this.state.deployGarments, deployOrderBy: false, deployModelView: false })
                break;
            case 3: this.setState({ deployOrderBy: !this.state.deployOrderBy, deployGarments: false, deployModelView: false })
                break;
            case 4:
                this.setState({ deployModelView: !this.state.deployModelView, deployGarments: false, deployOrderBy: false })
                break;
            default:
                break;
        }  
    }
    render(){
        return(
            <div className="shop-mobile-filter">
                <MBHeader />
                <div className="shop-mobile-filter__body">
                    <SM main={this.smMainContent} /> {/* small main*/}
                    <div className="shop-mobile-filter__body__garments-option">
                        <button className="shop-mobile-filter__body__garments-option__content" onClick={()=>this.deployMobiFilter(1)}>TODAS LAS PRENDAS</button>
                        <OptionAllGarments garmentsOption={this.allGarmentsOption} deployState={this.state.deployGarments} />
                    </div>
                    <button className="shop-mobile-filter__body__filter-option" onClick={()=>this.deployMobiFilter(2)}>FILTRAR</button>
                    <div className="shop-mobile-filter__body__order-model">
                        <div className="shop-mobile-filter__body__order-model__content-left">
                            <button className="shop-mobile-filter__body__order-model__content-left__order" onClick={()=>this.deployMobiFilter(3)}>Ordenar por</button>
                            <DarkOption option={this.orderByOption} deployState={this.state.deployOrderBy} />
                        </div>
                        <div className="shop-mobile-filter__body__order-model__content-right">
                            <button className="shop-mobile-filter__body__order-model__content-right__model" onClick={()=>this.deployMobiFilter(4)}>Vista de modelo</button>
                            <DarkOption option={this.modelOption} deployState={this.state.deployModelView} />
                        </div>   
                    </div>
                    <MobileFilterBy />
                </div>
                
            </div>
        )
    }
}

export default ShopMobileFilter;