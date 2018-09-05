import { REQUEST_URL_PRODUCT, REQUEST_CATALOG, RECIEVE_CATALOG} from '../../actions/catalog/request_catalog';

let initial_state = {
    color:"",
    size:0,
    category :"",
    max_price:1000,
    min_price:0,
    order_by:"",
    products_list: [],
    isFetching:false,
};

let request_url_catalog = (state = initial_state, action) => {
    switch (action.type) {
        case REQUEST_URL_PRODUCT:
            switch (action.name){
                case 'COLOR' :
                    return Object.assign({}, state, {
                        color:action.e
                    })
                case 'SIZE' :
                    return Object.assign({}, state, {
                        size:action.e
                    })
                case 'CATEGORY' :
                    return Object.assign({}, state, {
                        category:action.e
                    })
                case 'PRICE' :
                   
                    return Object.assign({}, state, {
                        max_price:action.e[1],
                        min_price:action.e[0],

                    })
                case 'ORDER_BY' :
                    return Object.assign({}, state, {
                        order_by:action.e
                    })

            }
        case REQUEST_CATALOG:
            return Object.assign({}, state, {
                isFetching:true,
            })
        case RECIEVE_CATALOG:
            return Object.assign({}, state, {
                isFetching:false,
                products_list: action.products_list.data
            })
        default:
            return state
    }
};

export default request_url_catalog;




