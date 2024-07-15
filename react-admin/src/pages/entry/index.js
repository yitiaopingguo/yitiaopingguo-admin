import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/HeaderTop";
import LeftMenu from "../../components/LeftMenu-1";
import { useSelector } from "react-redux";
import { ConfigProvider, theme } from "antd";
import { PrivateRoute } from "../../router/router";
import { menuList } from "../../utils/menu";
import "./entry.scss";

// darkAlgorithm为暗色主题，defaultAlgorithm为亮色（默认）主题
// 注意这里的theme是来自于Ant Design的，而不是store
const { darkAlgorithm, defaultAlgorithm } = theme;

function flattenMenuWithParent(menuList, parentLabel = "") {  
  let flattened = [];  
  
  menuList.forEach((item) => {  
    const newItem = { ...item, parent: parentLabel };  
    if (item.children) {  
      // 递归调用flattenMenuWithParent，并将当前item的label作为下一级的parentLabel  
      const childrenFlattened = flattenMenuWithParent(item.children, item.label);  
      flattened = flattened.concat(childrenFlattened);  
    } else {  
      flattened.push(newItem);  
    }  
  });  
  
  return flattened;  
}  
function Entry() {
  // 获得路由钩子
  const location = useLocation();
  // 获取store中的主题配置
  const globalTheme = useSelector((state) => state.theme);

  // Ant Design主题变量
  let antdTheme = {
    // 亮色/暗色配置
    algorithm: globalTheme.dark ? darkAlgorithm : defaultAlgorithm,
  };

  // 应用自定义主题色
  if (globalTheme.colorPrimary) {
    antdTheme.token = {
      colorPrimary: globalTheme.colorPrimary,
    };
  }

  const [isUnfold, setisUnfold] = useState(false);

  //展开关闭左菜单
  const handleToggle = () => {
    setisUnfold(!isUnfold); // 切换value的值
  };

  // 调用函数来扁平化菜单并添加 parent 字段
  const flattenedMenuWithParent = flattenMenuWithParent(menuList);
  const breadObj = flattenedMenuWithParent.filter(i=>i.url === location.pathname).map((item) => {
      return { label: item.label, parent: item.parent };
  });

  return (
    <PrivateRoute>
      <ConfigProvider theme={antdTheme}>
        <div className="M-entry">
          <div className="M-public">
            <div className="M-left">
              <LeftMenu unfoldValue={isUnfold} />
            </div>
            <div className="M-right">
              <Header unfoldValue={isUnfold} onToggle={handleToggle} breadObj={breadObj} />
              <div className="main-container">
                <div className="content">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ConfigProvider>
    </PrivateRoute>
  );
}

export default Entry;
