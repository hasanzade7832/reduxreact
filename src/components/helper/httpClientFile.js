import axios from "axios";

import { authHeader } from "./auth-header";

const baseUrl = process.env.REACT_APP_ROOT_URL_FILE; // "http://localhost:8811/api"; //local-test


const Api_Path = `${baseUrl}/`; 

const httpClient = axios.create({
  baseURL: Api_Path,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
httpClient.defaults.headers.post["Access-Control-Allow-Methods"] = "*";
httpClient.defaults.headers.post["Access-Control-Allow-Headers"] = "*";
//httpClient.defaults.headers.common['Authorization'] = GetCurrentTime();

//const getAuthToken = () => localStorage.getItem('token');

const authInterceptor = (config) => {
  config.headers["Authorization"] = authHeader();
  return config;
};

httpClient.interceptors.response.use(
  function(response) {
    return response;
  },
  
);
httpClient.interceptors.request.use(authInterceptor);
//httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default httpClient;
