import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./App.css";
import { ConfigProvider } from "antd";
import { store } from "./store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { globalRouters } from "./router/router.js";
import './mock'
// 引入Ant Design中文语言包
import zhCN from "antd/locale/zh_CN";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={globalRouters} />
    </ConfigProvider>
  </Provider>
);

reportWebVitals();
