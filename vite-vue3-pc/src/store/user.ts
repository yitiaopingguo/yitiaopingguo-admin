import { defineStore } from "pinia";
export const userStore = defineStore({
  id: "user",
  //数据
  state: () => {
    return {
      token: localStorage.getItem("token") || "",
      userInfo:localStorage.getItem('userInfo')||{}
    };
  },
  //方法
  actions: {
    setUserInfo(data: any) {
      this.token = data.token;
      this.userInfo = data.user_info;
      localStorage.getItem("token", this.token);
      localStorage.getItem("userInfo", JSON.stringify(this.userInfo));
    },
  },
});
