import request_url_catalog from './catalog/products';
import products from './catalog/products';
import filters from './catalog/filters';
import add_product from './shop_detail/index';
import { combineReducers } from 'redux';
import user_info from './checkout/index'
import {reducer as formReducer} from  'redux-form';

const rootReducer = combineReducers({
    products,
    request_url_catalog,
    filters,
    add_product,
    user_info,
    form:formReducer,
});

export default rootReducer;