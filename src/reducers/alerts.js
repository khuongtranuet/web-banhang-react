import * as Types from "../constants/ActionTypes";

var initialState = {
  alertShow: false,
};

const alerts = (state = initialState, action) => {
  switch (action.type) {
    case Types.ALERT_ON:
      return { ...state, alertShow: true };
    case Types.ALERT_OFF:
      return { ...state, alertShow: false };
    default:
      return { ...state };
  }
};

export default alerts;
