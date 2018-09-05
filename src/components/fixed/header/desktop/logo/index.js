import React, { Component } from 'react';
import './index.css';

class HeaderLogo extends Component{
    render(){
        return(
            <div className="header-logo">
                <div className="header-logo__empty"/>
                <div className="header-logo__image"><div className="header-logo__image__background"/></div>
                <div className="header-logo__options">
                    <div className="header-logo__options__user">
                        <div className="header-logo__options__user__icon"/>
                        <div className="header-logo__options__user__text">Mi cuenta</div>
                    </div>
                    <div className="header-logo__options__purchases">
                        <div className="header-logo__options__purchases__icon"/>
                        <div className="header-logo__options__purchases__text">Compras</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderLogo;