import axios from "axios";
import { globalConfig } from "@/globalConfig";

let baseURL = "http://localhost:8099/";
const service = axios.create({
  baseURL,
  timeout: 10000,
});

//请求拦截器
service.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem(globalConfig.SESSION_LOGIN_INFO);
    if (userInfo && userInfo.token) {
      config.headers["x-acess-token"] = userInfo.token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (response.status !== 200) {
      return Promise.reject(new Error(res.success || "error"));
    } else {
      if (res.code == 200) {
        return res;
      } else {
        return res;
      }
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
