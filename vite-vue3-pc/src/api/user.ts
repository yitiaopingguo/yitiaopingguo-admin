import request from "../utils/require";

export function getUser(data: any) {
  return request({ url: "user/list", method: "get", params: data });
}
export function editUser(data: any) {
  return request({ url: "user/edit", method: "post", data });
}

export function getNewsList(data: any) {
  return request({ url: "/api/users", method: "get", data });
}