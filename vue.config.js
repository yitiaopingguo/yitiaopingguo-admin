/*
 * @Author: “chenjinwei” “507725948@qq.com”
 * @Date: 2023-10-26 11:49:01
 * @LastEditors: lucf 2572274368@qq.com
 * @LastEditTime: 2023-12-06 14:57:25
 * @FilePath: \vue2-template\vue2-template\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
