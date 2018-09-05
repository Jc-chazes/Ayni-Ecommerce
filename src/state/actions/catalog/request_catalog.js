import axios from 'axios';
export const REQUEST_URL_PRODUCT =  'REQUEST_URL_PRODUCT';
export const REQUEST_CATALOG = 'REQUEST_CATALOG';
export const RECIEVE_CATALOG = 'RECIEVE_CATALOG';


export function requestUrl(e,name){
    return{
        type: REQUEST_URL_PRODUCT,
        e,
        name,
    }
}

export function requestCatalog(url, pagination, products_per_page){
    return{
        type: REQUEST_CATALOG,
        url,
        pagination,
        products_per_page,
    }
}

export function recieveCatalog(json){
    return{
        type: RECIEVE_CATALOG,
        products_list: json
    }
}

export function getProductCatalog(url){
    return dispatch =>{
        dispatch(requestCatalog(url));
        return axios.get(url)
            .then(json => dispatch(recieveCatalog(json)))
            .catch(function (error){
                console.log(error);
            })
    }
}