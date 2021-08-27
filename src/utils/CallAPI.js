import axios from "axios";
import * as Config from "../constants/Config";

export default function CallAPI(
  endpoint,
  method = "GET",
  body = null,
  params = null,
  token = null
) {
  return axios({
    method: method,
    url: `${Config.REACT_APP_API_URL}/${endpoint}`,
    data: body,
    params: params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((err) => {
    console.log(err);
  });
}
