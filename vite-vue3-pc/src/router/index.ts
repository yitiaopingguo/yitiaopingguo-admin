//createRouter创建实例对象，RouteRecordRaw用于规范路由规则，类型限制,
//createWebHashHistory用于指定路由的工作模式（hash）
import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
//引入store的userStore
import { userStore } from "../store/user";
// NProgress
import NProgress from "../plugins/nprogress";
//创建路由规则
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "主页",
    },
    component: () => import("../views/home.vue"),
  },
  {
    path: "/details",
    name: "details",
    meta: {
      title: "详情",
    },
    component: () => import("../views/details.vue"),
  },
  {
    path: "/technical",
    name: "technical",
    meta: {
      title: "技术总结",
    },
    component: () => import("../views/technical.vue"),
  },
  //例：新建login.vue
];
//创建路由的实例对象
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
//路由导航首位
router.beforeEach((to, from, next) => {
  //根据路由动态更改title
  // if (to.meta.title) {
  //   document.title = to.meta.title
  // }
  // const store = userStore();
  // if (store.token) {
  //   next();
  // }
  NProgress.start();
  next();
  //else{if(to.path)}
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
