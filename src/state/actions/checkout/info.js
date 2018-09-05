export const REQUEST_INFO = 'REQUEST_INFO';
export const REQUEST_TARJETA = 'REQUEST_TARJETA';

export function requestInfo(e){
    return {
        type: REQUEST_INFO,
        e,
    }
}

export function requestTarjeta(e){
    return {
        type: REQUEST_TARJETA,
        e,
    }
}
