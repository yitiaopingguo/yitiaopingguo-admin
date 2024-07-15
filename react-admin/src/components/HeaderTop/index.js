import { Button, Card, Dropdown, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { LoginOutlined } from "@ant-design/icons";
import { useState } from "react";
import ThemeModal from "@/components/ThemeModal";
import { globalConfig } from "@/globalConfig";
import BreadCrumb from "@/components/BreadCrumb";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
// 新加入“太阳”图标
import {
  MoonOutlined,
  ThemeOutlined,
  SunOutlined,
} from "@/components/ExtraIcons";
// 引入Redux
import { useSelector, useDispatch } from "react-redux";
// 从主题换肤store分库引入setDark方法
import { setDark } from "@/store/slices/theme";
import "./Header.css";

function Header(props) {
  // 获取redux派发钩子
  const dispatch = useDispatch();
  // 创建路由钩子
  const navigate = useNavigate();

  // 获取store中的主题配置
  const theme = useSelector((state) => state.theme);

  // 是否显示主题色选择对话框
  const [showThemeModal, setShowThemeModal] = useState(false);
  //是否显示退出登录弹框
  const [showLoginOutModal, setShowLoginOutModal] = useState(false);
  const LoginOut = () => {
    localStorage.setItem(globalConfig.SESSION_LOGIN_INFO,{});
    navigate("/Login");
  };
  const items = [
    {
      key: "1",
      label: (
        <span
          onClick={() => {
            setShowLoginOutModal(true);
          }}
        >
          <LoginOutlined /> 退出登录
        </span>
      ),
    },
  ];

  return (
    <Card className="M-header">
      <div className="header-wrapper">
        <Button
          type="primary"
          onClick={props.onToggle}
          style={{ marginBottom: 16 }}
        >
          {props.unfoldValue ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <div className="bread-crumb-box">
          <BreadCrumb breadDate={props.breadObj}></BreadCrumb>
        </div>

        <div className="opt-con">
          {theme.dark ? (
            <Button
              icon={<SunOutlined />}
              shape="circle"
              onClick={() => {
                dispatch(setDark(false));
              }}
            ></Button>
          ) : (
            <Button
              icon={<MoonOutlined />}
              shape="circle"
              onClick={() => {
                dispatch(setDark(true));
              }}
            ></Button>
          )}
          {
            // 当globalConfig配置了主题色，并且数量大于0时，才显示主题色换肤按钮
            globalConfig.customColorPrimarys &&
              globalConfig.customColorPrimarys.length > 0 && (
                <Button
                  icon={<ThemeOutlined />}
                  shape="circle"
                  onClick={() => {
                    setShowThemeModal(true);
                  }}
                ></Button>
              )
          }
          <div>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomLeft"
              arrow
            >
              <span>张三</span>
            </Dropdown>
          </div>
        </div>
      </div>
      {
        // 显示主题色换肤对话框
        showThemeModal && (
          <ThemeModal
            onClose={() => {
              setShowThemeModal(false);
            }}
          />
        )
      }
      {
        // 显示主题色换肤对话框
        showLoginOutModal && (
          <Modal
            title="Basic Modal"
            open={showLoginOutModal}
            onOk={LoginOut}
            onCancel={() => {
              setShowLoginOutModal(false);
            }}
          >
            <p>真的要注销登录吗 ?</p>
          </Modal>
        )
      }
    </Card>
  );
}

export default Header;
