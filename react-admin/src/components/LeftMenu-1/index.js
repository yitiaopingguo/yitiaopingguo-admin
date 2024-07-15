import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { menuList } from "../../utils/menu";
import { deepCopy } from "../../utils/method";
import { useSelector } from "react-redux";
import { globalConfig } from "@/globalConfig";
import "./LeftMenu.css";

const items = deepCopy(menuList);

items.forEach((item)=>{
  if(item.children&&Array.isArray(item.children)){
    item.children = item.children.filter(v=>!v.disabled)
  }
})

const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        return func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items);

const LeftMenu = (props) => {
  //点击菜单，收起其他展开的所有菜单
  const [stateOpenKeys, setStateOpenKeys] = useState(["sub1", "2"]);

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };
  // 创建路由钩子
  const navigate = useNavigate();
  //菜单点击
  const onClick = (e) => {
    window.localStorage.setItem(
      globalConfig.SESSION_LOGIN_Menu,
      JSON.stringify(e.keyPath)
    );
    navigate(e.item.props.url);
  };

  //获得主题配置
  const globalTheme = useSelector((state) => state.theme);

  //获得默认菜单
  const globalMenu = useSelector((state) => state.menu);

  //默认选中
  const defaultKey = globalMenu.defaultMenu;

  return (
    <div className="left-Menu" style={{ width: props.unfoldValue ? 80 : 256 }}>
      <div
        className="left-logo"
        style={{ background: globalTheme.dark ? "#141414" : "#fff" }}
      >
        <div className={globalTheme.dark ? "logo-img" : "logo-dark-img"}></div>
      </div>
      <Menu
        style={{ height: "100%" }}
        onClick={onClick}
        defaultSelectedKeys={defaultKey}
        defaultOpenKeys={["sub1"]}
        onOpenChange={onOpenChange}
        mode="inline"
        inlineCollapsed={props.unfoldValue}
        items={items}
      />
    </div>
  );
};

export default LeftMenu;
