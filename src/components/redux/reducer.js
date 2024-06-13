import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_INDIVIDUAL_ITEM } from "./Actionconstant";

const initialState = {
    items: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: 
            const index = state.items.findIndex((val) => val.id === action.payload.id);
            if (index >= 0) {
                const updatedItems = state.items.map((item, idx) => 
                    idx === index ? { ...item, qnty: item.qnty + 1 } : item
                );
                return {
                    ...state,
                    items: updatedItems
                };
            } else {
                const temp = { ...action.payload, qnty: 1 };
                return {
                    ...state,
                    items: [...state.items, temp]
                };
            }
        
        case REMOVE_FROM_CART:
           
                const filteredItems = state.items.filter(val => val.id !== action.payload.id);
                return {
                    ...state,
                    items: filteredItems
                };
            
        case REMOVE_INDIVIDUAL_ITEM:    
        const rindex = state.items.findIndex((val) => val.id === action.payload.id);
        if (state.items[rindex].qnty > 1) {
            const updatedItems = state.items[rindex].qnty -= 1;
            return {
                ...state,
                items: [...state.items]
            };
        }else if(state.items[rindex].qnty == 1){
            const filteredItems = state.items.filter(val => val.id !== action.payload.id);
                return {
                    ...state,
                    items: filteredItems
                };
        }

        default:
            return state;
    }
}
