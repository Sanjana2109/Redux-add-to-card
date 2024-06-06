import { ADD_TO_CART, REMOVE_FROM_CART } from "./Actionconstant";
import addToCart from "./Actions";

const initialState = {
    items:[]
}

export const addToCartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART: return {
            ...state,
            items:[...state.items,action.payload]
        }
        default : return {
            ...state
        }
    }
}

export const removeFromCartReducer = (state = initialState, action) => {
    switch(action.type){
        case REMOVE_FROM_CART: return {
            items:[...state.items.filter(val=> val.id !== action.payload?.id)]
        }
        default : return {
            ...state
        }
    }
}