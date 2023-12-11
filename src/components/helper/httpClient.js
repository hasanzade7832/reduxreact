import axios from "axios";
import { authHeader } from "./auth-header";

const baseUrl = process.env; 
console.log("bbbbbbbbbb",baseUrl)

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

const authInterceptor = (config) => {
  config.headers["Authorization"] = authHeader();
  return config;
};

httpClient.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response.status === 401) {
    }
    return Promise.reject(error);
  }
);
httpClient.interceptors.request.use(authInterceptor);

export default httpClient;
