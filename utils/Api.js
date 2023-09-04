import axios from "axios";

import { API_BASE_URL } from "./Url";
export const Api = async (method, route, data) => {
  console.log(method)
  const promise = axios({
    method: method,
    url: `${API_BASE_URL}/${route}`,
   
    headers: {
  
      Authorization: "Bearer " + localStorage.getItem("pos-auth-token"),
      "content-type": "multipart/form-data",
    },
    data: data,
  });

  const response = await promise
    .then((resp) => {
      return resp;
    })
    .catch((err) => {
      if (err.response.status === 401) {
        localStorage.clear();

        return err.response;
      } else {
        return err.response;
      }
    });

  return response;
};
