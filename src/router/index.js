import NProgress from "nprogress"; // 导入 nprogress
import "../assets/styles/nprogress.scss"; // 导入样式，否则看不到效果
// 导入组件
import Vue from "vue";
import Router from "vue-router";
// 登录
import login from "@/views/login";
// 文本编辑
import editor from "@/views/example/Test.vue";
// 首页
import index from "@/views/index";
/**
 * 基础菜单
 */
// 文章列表
import Goods from "@/views/goods/Goods";
// 项目列表
import Project from "@/views/project/index";
// 留言列表
import Message from "@/views/message/index";
/**
 * 系统管理
 */
// 用户管理
import user from "@/views/system/user";
// 菜单管理
import Module from "@/views/system/Module";

// // 图表界面
import statistics from "@/views/charts/statistics";

// 启用路由
Vue.use(Router);

// 导出路由
export const constantRoutes = [
    {
        path: "/",
        name: "",
        component: login,
        hidden: true,
        meta: {
            requireAuth: false,
        },
    },
    {
        path: "/login",
        name: "登录",
        component: login,
        hidden: true,
        meta: {
            requireAuth: false,
        },
    },
    {
        path: "/editor",
        name: "文本编辑",
        component: editor,
        hidden: true,
        meta: {
            requireAuth: false,
        },
    },
    {
        path: "/index",
        name: "首页",
        component: index,
        iconCls: "el-icon-tickets",
        children: [
            {
                path: "/goods/Goods",
                name: "文章列表",
                component: Goods,
                meta: {
                    requireAuth: true,
                },
            },
            {
                path: "/project/index",
                name: "项目列表",
                component: Project,
                meta: {
                    requireAuth: true,
                },
            },
            {
                path: "/message/index",
                name: "留言列表",
                component: Message,
                meta: {
                    requireAuth: true,
                },
            },
            {
                path: "/system/user",
                name: "用户管理",
                component: user,
                meta: {
                    requireAuth: true,
                },
            },
            {
                path: "/system/Module",
                name: "菜单管理",
                component: Module,
                meta: {
                    requireAuth: true,
                },
            },
            {
                path: "/charts/statistics",
                name: "数据可视化",
                component: statistics,
                meta: {
                    requireAuth: true,
                },
            },
        ],
    },
];
NProgress.configure({ showSpinner: true }); // 显示右上角螺旋加载提示
const createRouter = () =>
    new Router({
        scrollBehavior: () => ({ y: 0 }),
        routes: constantRoutes,
    });
const router = createRouter();
router.beforeEach((to, from, next) => {
    NProgress.start(); // 开启进度条
    next();
    NProgress.done(); // 关闭进度条
});
export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher; // reset router
}
export default router;
