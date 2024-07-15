import { useState } from "react";
import { PutLogin } from "@/api/user";
import { Button, Input, notification  } from "antd";
import { useNavigate } from "react-router-dom";
import { apiState } from "@/utils/common";
import { globalConfig } from "@/globalConfig";
import "./Login.scss";

function Login() {
  // 创建路由钩子
  const navigate = useNavigate();

  // 组件中自维护的实时数据
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  // 登录
  const login = async () => {

    let data1 = {
      userName: account,
      userPassword: password,
    };
    const res = await PutLogin(data1);
    if (res.code == apiState.PASSWORD_OK_ADMIN) {
      //设置本地缓存，进行路由守卫
      localStorage.setItem(
        globalConfig.SESSION_LOGIN_INFO,
        JSON.stringify({
          nickname: account,
          token: res.data.token,
        })
      );
      notification['success']({
        message: '欢迎',
        description:
          '下午好，欢迎回来!',
      });
      navigate("/Home");
    } else {
      notification['warning']({
        message: '警告',
        description:
          '用户名或密码错误!'
      });
    }
  };

  return (
    <div className="P-login">
      <div className="ipt-con">
        <Input
          placeholder="账号"
          value={account}
          onChange={(e) => {
            setAccount(e.target.value);
          }}
        />
      </div>
      <div className="ipt-con">
        <Input.Password
          placeholder="密码"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="ipt-con">
        <Button type="primary" block={true} onClick={login}>
          登录
        </Button>
      </div>
    </div>
  );
}

export default Login;
