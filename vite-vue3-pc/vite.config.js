import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //线上接口
  // server: {
  //   //端口号
  //   port: 8099,
  //   //允许自动打开浏览器
  //   open: true,
  //   //跨域代理
  //   proxy: {
  //     "/": "http://localhost:8099/",
  //   },
  //   //允许跨域
  //   cors: true,
  // },
  //本地接口
  server: {
    proxy: {
      "/article": "http://localhost:8099/",
    },
    cors: true,
  },
  //设置在src下可以使用@
  resolve: {  
    alias: {  
      '@': '/src'  
    }  
  }  
});
