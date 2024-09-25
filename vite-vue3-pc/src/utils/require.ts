import axios from "axios";
let baseURL = "/";
const service = axios.create({
  baseURL,
  timeout: 10000,
});

//请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-acess-token"] = token;
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
        alert(res.success);
      }
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
