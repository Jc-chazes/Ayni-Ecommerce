import {REQUEST_INFO} from '../../actions/checkout/info'
import {REQUEST_TARJETA} from '../../actions/checkout/info'


let initial_state = {
       info:{},
       tarjeta:{}
}


let user_info = (state =initial_state,action)=>{
    switch(action.type){
        case REQUEST_INFO :
         
           return Object.assign({},state,{
               info : action.e
           })
        case REQUEST_TARJETA : 
            return Object.assign({},state,{
                tarjeta : action.e
            })
        default :
           return state;
    }


}
export default user_info;