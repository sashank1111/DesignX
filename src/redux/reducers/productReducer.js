// app/redux/reducers/productReducer.js
import { FETCH_PRODUCTS } from '../action/type';
const initialState = {
    items: []
};
export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_PRODUCTS:
            return {
                ...state,
                items:action.payload
            }
        default:
            return state
    }
}