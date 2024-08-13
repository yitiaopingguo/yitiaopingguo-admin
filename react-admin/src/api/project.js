import request from "../utils/require";

//About页获取数据Api
export function getProjectList(data) {
    return request({ url: "/project/listPage", method: "post",data });
  }
  
  //登录
  export function PutLogin(data) {
    return request({ url: "/Blog/Login", method: "post", data });
  }
  