import * as Types from "../constants/ActionTypes";
import callApi from "../utils/apiCaller";

export const accFetchProductsRequest = () => {
  return (dispatch) => {
    return callApi("films", "GET", null).then((res) => {
      console.log(res);
      dispatch(accFetchProducts(res.data));
    });
  };
};

export const accFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products,
  };
};

export const accFetchProvinces = (provinces) => {
  return {
    type: Types.FETCH_PROVINCES,
    provinces,
  };
};

export const alertOn = (alerts) => {
  return {
    type: Types.ALERT_ON,
    alerts,
  };
};

export const alertOff = (alerts) => {
  return {
    type: Types.ALERT_OFF,
    alerts,
  };
};
