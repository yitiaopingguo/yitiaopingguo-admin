import { createHashRouter, Navigate } from "react-router-dom";
import { Home, Project, Login, Entry, Article ,Message , User,Menu,Tags,ArticleDetail} from "../pages/index";
import { globalConfig } from "../globalConfig";
import { menuList } from "@/utils/menu";

export const globalRouters = createHashRouter([
  {
    path: "/",
    element: <Entry />,
    children: [
      {
        // 如果URL没有"#路由"，跳转Home页面
        path: "/",
        element: <Navigate to="/Home" />,
      },
      {
        // 精确匹配"/home"，跳转Home页面
        path: "/Home",
        element: <Home />,
        title: "主页",
      },
      {
        path: "/Project",
        element: <Project />,
        title: "项目列表",
      },
      {
        path: "/Article",
        element: <Article />,
        title: "文章列表",
      },
      {
        path: "/Article/detail",
        element: <ArticleDetail />,
        title: "文章详情",
      },
      {
        path: "/Tags",
        element: <Tags />,
        title: "标签列表",
      },
      {
        path: "/Message",
        element: <Message />,
        title: "留言列表",
      },
      {
        path: "/User",
        element: <User />,
        title: "用户列表",
      },
      {
        path: "/Menu",
        element: <Menu />,
        title: "菜单列表",
      },
    ],
  },
  {
    // 未匹配，，跳转Login页面
    path: "*",
    element: <Navigate to="/Login" />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

// 路由守卫
export function PrivateRoute(props) {
  const match = window.location.href.split('#')[1];
  if (match && match.length > 1) {
    localStorage.setItem(globalConfig.SESSION_LOGIN_Menu,JSON.stringify(findNodeWithUrl(menuList,match)))
}
  
  // 判断localStorage是否有登录用户信息，如果没有则跳转登录页
  return window.localStorage.getItem(globalConfig.SESSION_LOGIN_INFO) ? (
    props.children
  ) : (
    <Navigate to="/login" />
  );
}

function findNodeWithUrl(tree, targetUrl, result = null) {  
  for (let node of tree) {  
      if (node.url === targetUrl) {  
          // 找到了目标节点，返回当前节点key和父节点key（如果有的话）  
          // 假设父节点key在递归调用时传递  
          if (result) {  
              // result 是一个数组，包含父级key  
              return [node.key, ...result];  
          } else {  
              // 如果没有父节点，则只返回当前节点key  
              return [node.key];  
          }  
      }  
        
      if (node.children && node.children.length > 0) {  
          // 递归查找子节点  
          const childResult = findNodeWithUrl(node.children, targetUrl, [node.key]);  
          if (childResult) {  
              return childResult;  
          }  
      }  
  }  
    
  // 如果没有找到目标节点，返回null  
  return null;  
}  