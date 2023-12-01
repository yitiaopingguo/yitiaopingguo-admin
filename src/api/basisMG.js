import axios from 'axios';
import { req } from './axiosFun';

/**
 * 文章列表
 **/
// 文章列表-获取文章列表列表
export const GoodsList = (params) => { return req("post", "/api/Goods/list", params) };
// 文章列表-保存文章列表
export const GoodsSave = (params) => { return req("post", "/api/Goods/save", params) };
// 文章列表-删除文章列表
export const GoodsDelete = (params) => { return axios.delete("/api/Goods/delete?ids=" + params + "&token=" + localStorage.getItem('logintoken')).then(res => res.data) };

