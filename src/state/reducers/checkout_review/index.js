import {REQUEST_PRODUCT} from '../../actions/checkout_review/index';
import idb from 'idb';

let initial_state = {
    data: []
};
let  product_request= (state = initial_state, action) =>{
    switch (action.type) {
        case REQUEST_PRODUCT:
            var dbPromise = idb.open('my-shop')  
            dbPromise.then(function(db) {
                var tx = db.transaction('shop', 'readonly');
                var store = tx.objectStore('shop');
                return store.getAll();
            }).then(item => {
                show(item)   
            })
            var show=(e)=>{
                return Object.assign({}, state, { data:e})
            } 
          
        default:    
            return state
    }
}
export default product_request;

