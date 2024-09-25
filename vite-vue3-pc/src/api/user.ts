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
//模糊查询+分页，获取所有文章的数据
export function getPageData(data) {
  return request({ url: "/article/listPage", method: "post" ,data});
}

//获取所有分类
export function withCategories() {
  return request({ url: "article/withCategories", method: "get" });
}

//根据id查询相关文章
export function getArticle(data) {
  return request({ url: `article/getById?id=${data}`, method: "get" });
}



