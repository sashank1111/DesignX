// app/redux/actions/productAction.js
import { FETCH_PRODUCTS } from './type';
import { getProducts } from '../../data';
export const fetchProducts = (value) => dispatch => {
     console.log(value,'valid')
     dispatch({
        type: FETCH_PRODUCTS,
        payload: value
    })
}