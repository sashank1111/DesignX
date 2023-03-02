import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from '../action/type';
const initialState = {
    cart: [],
    total: 0,
}
export default function(state=initialState, action) {
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                // cart: [action.payload, ...state.cart],
                total: action.payload
            }
        case EMPTY_CART:
            return {
                ...state,
                cart: [],
                total: 0
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                // cart: state.cart.filter((item, i) => i !== action.payload.index),
                total: action.payload
            }
        default:
            return state
    }
}