import { ADD_TO_CART, REMOVE_FROM_CART } from "./Actionconstant";


export default function addToCart(payload = []){

    return{
        type:ADD_TO_CART,
        payload:payload,
    }
}

export function removeFromCart(payload = []){
    return{
        type:REMOVE_FROM_CART,
        payload:payload,
    }
}