export const ADD_TO_CAR =  'ADD_TO_CAR'


export function add_car(item){
    return{
        type: ADD_TO_CAR,
        item:item
    }
}
