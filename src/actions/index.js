import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const accFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('films', 'GET', null).then(res => {
            dispatch(accFetchProducts(res.data))
        });
    };
}

export const accFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}