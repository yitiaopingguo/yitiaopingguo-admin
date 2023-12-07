const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, //禁用ESLint
    devServer: {
        // 端口号
        port: 8080,
        // 基本不同配置，了解即可
        host: 'localhost',
        // 是否自启动
        open: true,
    },
})
