import React from 'react';
import './index.css';

var List =(val)=>{
    return(
        <div className='list'>
            <div style={{
                backgroundImage:'url('+val.image+')',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
                backgroundSize:'contain',
                width:60,
                height:60,
            }}/>
            <div className='list_container'>
                <div className='list_container__item'>{val.description}</div>
                <div className='list_container__values'>
                    <div className='list_container__item'>{val.color}</div>
                    <div className='list_container__item'> - {val.size} - </div>
                    <div className='list_container__item'>{val.cant}Uds</div>
                </div>
                <div className='list_container__item'>S/{val.price*val.cant}</div>
            </div>
        </div>
    );
}

export default List;