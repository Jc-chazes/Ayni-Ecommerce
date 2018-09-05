import {ADD_TO_CAR} from '../../actions/shop_detail/index';
import idb from 'idb';

let initial_state = {
    data_car: []
};
let add_product = (state = initial_state, action) =>{
    switch (action.type) {
        case ADD_TO_CAR:
            state.data_car.push(action.item)
            return Object.assign({}, state, {
                data_car:state.data_car
            })
        default:
            return state
    }
}
export default add_product;
