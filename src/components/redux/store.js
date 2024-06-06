import { addToCartReducer, removeFromCartReducer } from "./reducer";
import { combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";

const rootReducer = combineReducers({
    add:addToCartReducer,
    remove:removeFromCartReducer
})



export const cartStore = legacy_createStore(rootReducer,applyMiddleware(thunk))