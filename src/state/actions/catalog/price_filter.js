import axios from 'axios';
export const REQUEST_BY_PRICE = 'REQUEST_BY_PRICE'
export const RECIEVE_BY_PRICE = 'RECIEVE_BY_PRICE'

export function requestByPrice(url){
    return{
        type: REQUEST_BY_PRICE,
        url,
    }
}

export function recieveByPrice(json){
    return{
        type: RECIEVE_BY_PRICE,
        products_by_price: json
    }
}

export function getProductsByPrice(url){
    return dispatch =>{
        dispatch(requestByPrice(url));
        return axios.get(url)
            .then(json => dispatch(recieveByPrice(json)))
            .catch(function (error){
                console.log(error);
            })
    }
}
