import { REQUEST_BY_PRICE, RECIEVE_BY_PRICE } from '../../actions/catalog/price_filter'

let initial_state = {
    by_price: true,
    products_by_price: {},
}

let filters = (state = initial_state, action) => {
    switch (action.type) {
        case REQUEST_BY_PRICE:
            return Object.assign({}, state, {
                by_price:true
            })
        case RECIEVE_BY_PRICE:
            return Object.assign({}, state, {
                by_price:false,
                products_by_price: action.products_by_price
            })
        default:
            return state
    }
}

export default filters;