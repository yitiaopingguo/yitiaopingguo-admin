import request from "../utils/require";

//获取所有标签
export function getAllHotTag() {
  return request({ url: "/Blog/getAllHotTag", method: "get" });
}

//About页获取数据Api
export function getAllMessage() {
  return request({ url: "/Blog/getAllMessage", method: "get" });
}

//登录
export function PutLogin(data) {
  return request({ url: "/Blog/Login", method: "post", data });
}

//登陆注销
export function CancelLogin(token) {
  return request({ url: "/Blog/CancelLogin", method: "get", headers: {"token": token} });
}


//增加友链
export function addLink(data) {
  return request({ url: "/Blog/addLink", method: "post" ,data});
}

//新增吐槽
export function setMessage(data) {
  return request({ url: "/Blog/setMessage", method: "post" ,data});
}

//新增文章评论
export function setComment(data) {
  return request({ url: "/Blog/setComment", method: "post" ,data});
}

//获取指定文章的所有评论
export function getComment(title) {
  return request({ url: `/Blog/setComment/${title}`, method: "get"});
}

//增加点赞量
export function setDianZan(count) {
  return request({ url: `/Blog/setDianZan/${count}`, method: "get"});
}

//获取指定文章的内容
export function getArticles(title) {
  return request({ url: `/Blog/getArticles/${title}`, method: "get"});
}

//文件上传
export function Upload(title) {
  return request({ url: `/Upload`, method: "post",headers: {'Content-Type': 'multipart/form-data'}});
}

//模糊查询+分页，获取所有文章的数据
export function getPageData(data) {
  return request({ url: "/article/listPage", method: "post" ,data});
}

//删除文章
export function deleteArticle(data) {
  return request({ url: `/article/del?id=${data}`, method: "get" ,});
}

//新增文章
export function saveArticle(data) {
  return request({ url: `/article/save`, method: "post" ,data});
}

//根据ID获得详情
export function getByIdArticle(data) {
  return request({ url: `/article/getById?id=${data}`, method: "get"});
}

//编辑文章
export function updateArticle(data) {
  return request({ url: `/article/update`, method: "post",data});
}


//文章搜索
export function getArticlesSearch(search) {
  return request({ url: `/Blog/getArticlesSearch/${search}`, method: "get"});
}

//根据标签获取文章
export function getTagArticle(tag) {
  return request({ url: `/Blog/getTagArticle/${tag}`, method: "get"});
}

//test
export function getTest(data) {
  return request({ url: "/test", method: "get", data });
}

//upload图片
export function upload(data) {
  return request({ url: "/common/upload", method: "post", data });
}

